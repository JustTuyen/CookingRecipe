from django.db import models
from django.contrib.auth.models import AbstractUser
from cores.models import Status
# Create your models here.
class User(AbstractUser):
    class ROLE(models.TextChoices):
        ADMIN = 'admin', 'Admin',
        MOD = 'mod', 'Mod',
        USER = 'user', 'User'
    
    email = models.EmailField(unique=True)
    birth_date = models.DateField(blank=True)
    gender = models.CharField(max_length=255,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    role = models.CharField(choices=ROLE.choices, default=ROLE.USER)
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

    