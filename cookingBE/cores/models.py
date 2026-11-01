from django.db import models

# Create your models here.

#1 status
class Status(models.Model):
    type = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['name', 'type'],
                name='unique_status_type_name'
            )
        ]
        ordering = ['type', 'name']
    def __str__(self):
        return f"{self.type}: {self.name}"
    