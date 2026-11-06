from django.db import models
from cores.models import Media, Status
from django.core.validators import MinValueValidator, MaxValueValidator
from users.models import User
from productions.models import Dish, Course
from django.db.models import Q
# Create your models here.

class Banner(models.Model):
    name = models.CharField(max_length=255, unique=True)
    description = models.CharField(max_length=2000),
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    display_order = models.PositiveIntegerField(help_text='the order of the banner display')
    note = models.CharField(max_length=255, blank=True)
    router_to = models.CharField(max_length=255, blank=True, help_text='add router link if has')
    media = models.ForeignKey(
        Media,
        on_delete=models.PROTECT,
        related_name='banners',
        null=True,
        blank=True
    )
    status = models.ForeignKey(
        Status,
        on_delete=models.PROTECT,
        related_name='banners',
    )

    class Meta:
        ordering = ['status', 'name']

    def __str__(self):
        return f"{self.name}"

class Post(models.Model):
    title = models.CharField(max_length=255,unique=True)
    context = models.CharField(max_length=2000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    status = models.ForeignKey(
        Status,
        on_delete=models.PROTECT,
        related_name='posts',
    )

    media = models.ManyToManyField(
        Media,
        through="PostMedia",
        related_name="posts",
    )

    class Meta:
        ordering = ['status', 'title']

    def __str__(self):
        return f"{self.title}"

#based review for all
class BaseReview(models.Model):
    rating = models.PositiveSmallIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    comment = models.CharField(max_length=2000)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(
        User,
        related_name="%(class)ss", 
        on_delete=models.PROTECT
    )
    status = models.ForeignKey(
        Status,
        related_name="%(class)ss", 
        on_delete=models.PROTECT,
    )

    class Meta:
        abstract = True

    def __str__(self):
        return f"{self.rating}/5"

#review for dishes
class DishReview(BaseReview):
    dish = models.ForeignKey(Dish, on_delete=models.CASCADE, related_name="reviews")

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=["user", "dish"], name="unique_user_dish_review"),
        ]

#review for course
class CourseReview(BaseReview):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="reviews")

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=["user", "course"], name="unique_user_course_review"),
        ]


#media library for each model
class BaseGalleryItem(models.Model):
    media = models.ForeignKey(
        Media,
        on_delete=models.PROTECT,
        related_name="%(class)s_items",   
    )
    sort_order = models.PositiveIntegerField(default=0)
    is_primary = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        abstract = True
        ordering = ["sort_order", "id"]

class DishMedia(BaseGalleryItem):
    dish = models.ForeignKey(Dish, on_delete=models.CASCADE, related_name="gallery")
        
    class Meta(BaseGalleryItem.Meta):
        constraints = [
            models.UniqueConstraint(fields=["dish", "media"], name="unique_dish_media"),
            models.UniqueConstraint(
                fields=["dish"], condition=Q(is_primary=True), name="one_primary_per_dish"
            ),
        ]


class CourseMedia(BaseGalleryItem):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="gallery")

    class Meta(BaseGalleryItem.Meta):
        constraints = [
            models.UniqueConstraint(fields=["course", "media"], name="unique_course_media"),
            models.UniqueConstraint(
                fields=["course"], condition=Q(is_primary=True), name="one_primary_per_course"
            ),
        ]


class PostMedia(BaseGalleryItem):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="gallery")

    class Meta(BaseGalleryItem.Meta):
        constraints = [
            models.UniqueConstraint(fields=["post", "media"], name="unique_post_media"),
            models.UniqueConstraint(
                fields=["post"], condition=Q(is_primary=True), name="one_primary_per_post"
            ),
        ]


class DishReviewMedia(BaseGalleryItem):
    review = models.ForeignKey(DishReview, on_delete=models.CASCADE, related_name="gallery")

    class Meta(BaseGalleryItem.Meta):
        constraints = [
            models.UniqueConstraint(fields=["review", "media"], name="unique_dishreview_media"),
        ]


class CourseReviewMedia(BaseGalleryItem):
    review = models.ForeignKey(CourseReview, on_delete=models.CASCADE, related_name="gallery")

    class Meta(BaseGalleryItem.Meta):
        constraints = [
            models.UniqueConstraint(fields=["review", "media"], name="unique_coursereview_media"),
        ]