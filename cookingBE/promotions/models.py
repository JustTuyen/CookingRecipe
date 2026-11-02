from django.db import models
from cores.models import Media, Status
from django.core.validators import MinValueValidator, MaxValueValidator
from users.models import User
from productions.models import Dish, Course
# Create your models here.

class Banner(models.Model):
    name = models.CharField(max_length=255, unique=True)
    description = models.CharField(max_length=2000),
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    display_order = models.PositiveIntegerField(help_text='the order of the banner display')
    note = models.CharField(max_length=255, blank=True)
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

class MediaGallary(models.Model):