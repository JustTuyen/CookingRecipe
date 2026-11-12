from django.db import models
from django.contrib.auth.models import AbstractUser
from cores.models import Status
from productions.models import Dish, Course
# Create your models here.
# author and user model separated? 
#add badge for better Differentiate normal normie to chef like role
#normie is an insult???
#need user full legit name for author, when user post a dish, required for it
#verify first name matched with last name? 
#properly not

class User(AbstractUser):

    class ROLE(models.TextChoices):
        ADMIN = 'admin', 'Admin',
        MOD = 'mod', 'Mod',
        USER = 'user', 'User'

    class BADGE(models.TextChoices):
        CHEF = 'chef', 'Chef',
        NORMIE = 'normie', 'NORMIE',
        CRITIC = 'critic','Critics'

    first_name = models.CharField(max_length=255,blank=True)
    last_name = models.CharField(max_length=255,blank=True)
    email = models.EmailField(unique=True)
    birth_date = models.DateField(blank=True)
    gender = models.CharField(max_length=255,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    role = models.CharField(choices=ROLE.choices, default=ROLE.USER)
    badge = models.CharField(choices=BADGE.choices, default=BADGE.NORMIE)
    status = models.ForeignKey(
        Status,
        related_name='users',
        on_delete=models.PROTECT,
    )

    class Meta:
        indexes = [
            models.Index(fields=['role', '-created_at'], name='idx_user_role_create')
        ]
        ordering = ['role', 'email']
    def __str__(self):
        return f"{self.email}:'{self.role}"

class Save(models.Model):
    user = models.ForeignKey(
        User,
        related_name='saves',
        on_delete=models.CASCADE,
    )

    dish = models.ForeignKey(
        Dish,
        on_delete=models.PROTECT,
        related_name='saves'
    )
    note = models.CharField(max_length=1000, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        indexes = [
            models.Index(fields=['user','dish'], name='idx_save_user_dish')
        ]

        ordering = ['user','created_at']
    def __str__(self):
        return f"{self.created_at}"

class Follow(models.Model):
    user = models.ForeignKey(
        User,
        related_name='follows',
        on_delete=models.CASCADE,
    )

    course = models.ForeignKey(
        Course,
        related_name='follows',
        on_delete=models.CASCADE,
    )

    created_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        indexes = [
            models.Index(fields=['user','course'], name='idx_save_user_cours')
        ]

        ordering = ['user','created_at']
    def __str__(self):
        return f"{self.created_at}"

class Report(models.Model):
    user = models.ForeignKey(
        User,
        related_name='reports',
        on_delete=models.CASCADE
    )
    dish = models.ForeignKey(
        Dish,
        related_name='reports',
        on_delete=models.CASCADE
    )
    status = models.ForeignKey(
        Status,
        related_name='reports',
        on_delete=models.PROTECT
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    type_violation = models.CharField(max_length=255)
    reason = models.CharField(max_length=1000, blank=True)
    class Meta:
        indexes = [
            models.Index(fields=['status','type_violation'], name='idx_rep_sta_type')
        ]
        ordering = ['type_violation','created_at']
    def __str__(self):
            return f"{self.type_violation}:'{self.created_at}"

#completion for user when they did a dish, can it be test if they actually did it?
#cant have order for check, pure good faith it is then
#that gonna be rough for the comment verify...
#no verification!
class Completion(models.Model):
    user = models.ForeignKey(
        User,
        related_name='completions',
        on_delete=models.CASCADE,
    )

    dish = models.ForeignKey(
        Dish,
        on_delete=models.CASCADE,
        related_name='completions'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        indexes = [
            models.Index(fields=['dish','user'], name='idx_complete_dish_user')
        ]

        ordering = ['dish','user']
    def __str__(self):
        return f"{self.created_at}"
