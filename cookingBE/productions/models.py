from django.db import models
from django.core.validators import MinValueValidator
from cores.models import Status, Media, Tag
from django.conf import settings

# Create your models here
class Category(models.Model):
    name = models.CharField(max_length=255, unique=True)
    description = models.CharField(max_length=255, blank=True, default='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    status = models.ForeignKey(
        Status,
        on_delete=models.PROTECT,
        related_name="categories",
        null=False,
        blank=False
    )
    class Meta:
        ordering = ['name','created_at']
    def __str__(self):
        return f"{self.name}"

class SubCategory(models.Model):
    name = models.CharField(max_length=255, unique=True)
    description = models.CharField(max_length=255, blank=True, default='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    category = models.ForeignKey(
        Category,
        on_delete=models.PROTECT,
        related_name='subcategories',
        null=False,
        blank=False
    )
    status = models.ForeignKey(
        Status,
        on_delete=models.PROTECT,
        related_name="subcategories",
        null=False,
        blank=False
    )
    media = models.ForeignKey(
        Media,
        on_delete=models.PROTECT,
        related_name='subcategories',
        null=True,
        blank=True
    )
    class Meta:
        indexes = [
            models.Index(fields=['category','name'], name='idx_subcat_cat_name')
        ]
        ordering = ['category','name']

    def __str__(self):
        return f"{self.name}:{self.description}"

#ordering courses...
#what? i dont remember??
class Course(models.Model):
    name = models.CharField(max_length=255, unique=True)
    description = models.CharField(max_length=2000, blank=True, default='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    status = models.ForeignKey(
        Status,
        on_delete=models.PROTECT,
        related_name='courses'
    )
    media = models.ManyToManyField(
        Media,
        through="promotions.CourseMedia",
        related_name="courses",
    )

    tags = models.ManyToManyField(
        Tag,
        through="TaggingCourse",
        related_name="courses",
    )
    
    class Meta:
        ordering = ['name', '-created_at']

    def __str__(self):
         return f"{self.name}"

class ChildSubCategory(models.Model):
    name = models.CharField(max_length=255, unique=True)
    description = models.CharField(max_length=255, blank=True, default='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    subCategory = models.ForeignKey(
        SubCategory,
        on_delete=models.PROTECT,
        related_name='childsubcategories',
    )
    status = models.ForeignKey(
        Status,
        on_delete=models.PROTECT,
        related_name="childsubcategories",
    )
    class Meta:
        indexes = [
            models.Index(fields=['subCategory','name'], name='idx_child_subcat_name')
        ]
        ordering = ['subCategory','name']

    def __str__(self):
        return f"{self.name}:{self.description}"

#sub -> child -> grandchild
#cat -> sub -> subsub // lol i dont know how else to name
#participation number 1:
#subcat lv1 -> subcat lv2 -> subcat lv3 // still lame

class GrandChildCategory(models.Model):
    name = models.CharField(max_length=255, unique=True)
    description = models.CharField(max_length=255, blank=True, default='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    childSubCategory = models.ForeignKey(
        ChildSubCategory,
        on_delete=models.PROTECT,
        related_name='grandchildcategories',
    )
    status = models.ForeignKey(
        Status,
        on_delete=models.PROTECT,
        related_name="grandchildcategories",
    )
    class Meta:
        indexes = [
            models.Index(fields=['childSubCategory','name'], name='idx_grand_child_name')
        ]
        ordering = ['childSubCategory','name']

    def __str__(self):
        return f"{self.name}:{self.description}"

#add extra detail section - mxchar = 2000, blank true
#use react quilver
class Dish(models.Model):
    DIFFICULTY_CHOICES = [
        (1, 'Easy'),
        (2, 'Medium'),
        (3, 'Hard'),
    ]

    name = models.CharField(max_length=255, unique=True)
    description = models.CharField(max_length=2000, blank=True, default='')
    #author = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    chef_note = models.CharField(max_length=2000, blank=True)
    cooking_time = models.PositiveIntegerField(
        null=True,
        blank=True,
        help_text="Cooking time in minutes"
    )
    prep_time = models.PositiveIntegerField(
        null=True,
        blank=True,
        help_text="Preparation time in minutes"
    )
    total_time = models.PositiveIntegerField(
        null=True,
        blank=True,
        help_text="Total time in minutes"
    )
    serving = models.PositiveIntegerField(
        null=True,
        blank=True
    )
    yields = models.PositiveIntegerField(
        null=True,
        blank=True
    )

    difficulty = models.IntegerField(
        choices=DIFFICULTY_CHOICES,
        default=1
    )

    childsubcategory = models.ForeignKey(
        ChildSubCategory,
        on_delete=models.PROTECT,
        related_name='dishes',
        null=False,
        blank=False,
    )

    #in case if belong to another level of grand-sub-cats
    #nullable
    grandsubcategory = models.ForeignKey(
        GrandChildCategory,
        on_delete=models.PROTECT,
        related_name='dishes',
        null=True,
        blank=True,
    )

    status = models.ForeignKey(
        Status,
        on_delete=models.PROTECT,
        related_name="dishes",
        null=False,
        blank=False
    )
    
    #for if dish post by user
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        related_name='dishes',
        on_delete=models.SET_NULL,
        null=True,
        blank=True

    )

    course = models.ForeignKey(
        Course,
        on_delete=models.PROTECT,
        related_name='dished',
        blank=True,
        null=True,
        help_text="If the dish belongs to a course",
    )
    media = models.ManyToManyField(
        Media,
        through="promotions.DishMedia",
        related_name="dishes",
    )
    tags = models.ManyToManyField(
        Tag,
        through="TaggingDish",
        related_name="dishes",
    )
    ingredients = models.ManyToManyField(
        "Ingredient",
        through="DishIngredient",
        related_name="dishes",
    )
    class Meta:
        indexes = [
            models.Index(
                fields=['difficulty', 'status'],
                name='id_dish_diff_status'
            )
        ]

        ordering = ['difficulty', 'name']

    def __str__(self):
        return f"{self.name}"

class Ingredient(models.Model):
    name = models.CharField(max_length=255,unique=True)
    description = models.CharField(max_length=2000, blank=True, default='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    status = models.ForeignKey(
        Status,
        on_delete=models.PROTECT,
        related_name="ingredients",
        null=False,
        blank=False
    )
    media = models.ForeignKey(
        Media,
        on_delete=models.SET_NULL,
        related_name='ingredients',
        null=True,
        blank=True
    )

    class Meta:
        ordering = ['name','status']

    def __str__(self):
        return f"{self.name}"

class DishIngredient(models.Model):
    dish = models.ForeignKey(
        Dish,
        on_delete=models.CASCADE,
        related_name='dish_ingredients'
    )

    ingredient = models.ForeignKey(
        Ingredient,
        on_delete=models.PROTECT,
        related_name='dish_ingredients'
    )

    quantity = models.DecimalField(
        max_digits=10,
        decimal_places=2,
        validators=[MinValueValidator(0)],
        help_text="The amount of ingredient"
    )

    unit = models.CharField(
        max_length=50,
        blank=True,
        default='',
        help_text="g, kg, ml, l, tbsp, tsp, cup, etc."
    )
    note = models.CharField(max_length=255, blank=True)
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['dish', 'ingredient'],
                name='unique_dish_ingredient'
            )
        ] 
        ordering = ['dish']

    def __str__(self):
        return f"{self.dish}:{self.ingredient}"

#speical directions for every dish, no many-many for reused
class Direction(models.Model):
    step_number = models.PositiveIntegerField(help_text='the order of directions')
    instruction = models.CharField(max_length=2000)
    duration = models.PositiveIntegerField(
        null=True,
        blank=True,
        help_text="duration for each step"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    media = models.ForeignKey(
        Media,
        on_delete=models.SET_NULL,
        related_name='directions',
        null=True,
        blank=True
    )
    dish = models.ForeignKey(
        Dish,
        on_delete=models.CASCADE,
        related_name='directions'
    )
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['dish', 'step_number'],
                name='unique_dish_step',
                deferrable=models.Deferrable.DEFERRED,
            )
        ] 
        ordering = ['dish', 'step_number']
    def __str__(self):
        return f"{self.step_number}:{self.instruction}"

class NutritionFact(models.Model):
    Calories = models.PositiveIntegerField(blank=True)
    Fat = models.PositiveIntegerField(blank=True)
    Carbs = models.PositiveIntegerField(blank=True)
    Protein = models.PositiveIntegerField(blank=True)
    Dietary_Fiber= models.PositiveIntegerField(blank=True)
    Total_Sugars= models.PositiveIntegerField(blank=True)
    Protein = models.PositiveIntegerField(blank=True)
    Saturated_Fat= models.PositiveIntegerField(blank=True)
    Cholesterol = models.PositiveIntegerField(blank=True)
    Vitamin_C= models.PositiveIntegerField(blank=True)
    Sodium = models.PositiveIntegerField(blank=True)
    Calcium = models.PositiveIntegerField(blank=True)
    Iron = models.PositiveIntegerField(blank=True)
    Potassium = models.PositiveIntegerField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    dish = models.ForeignKey(
        Dish,
        on_delete=models.CASCADE,
        related_name='nutritionFacts'
    )
    class Meta:
        ordering = ['dish', '-created_at']
    def __str__(self):
        return f"{self.Calories}:{self.created_at}"


#taggings
class TaggingDish(models.Model):
    tag = models.ForeignKey(
        Tag,
        related_name='dish_tags',
        on_delete=models.CASCADE,
    )
    dish = models.ForeignKey(
        Dish,
        related_name='dish_tags',
        on_delete=models.CASCADE,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['tag', 'dish'],
                name='unique_dish_tag',
            )
        ] 
        ordering = ['dish','tag']
    def __str__(self):
        return f"dish={self.dish_id} tag={self.tag_id}"

class TaggingCourse(models.Model):
    tag = models.ForeignKey(
        Tag,
        related_name='course_tags',
        on_delete=models.CASCADE,
    )
    course = models.ForeignKey(
        Course,
        related_name='course_tags',
        on_delete=models.CASCADE,
    )
    created_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['tag', 'course'],
                name='unique_course_tag',
            )
        ] 
        ordering = ['course','tag']
    def __str__(self):
        return f"dish={self.course_id} tag={self.tag_id}"


