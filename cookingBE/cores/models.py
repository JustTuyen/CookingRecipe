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
    indexes = [
        models.Index(fields=['type','-created_at'], name='id_tag_type_create')
    ]

    ordering = ['type', 'name']
    
    def __str__(self):
        return f"{self.type}: {self.name}"

class Media(models.Model):
    class ResourceType(models.TextChoices):
        IMAGE = "image", "Image"
        VIDEO = "video", "Video"
        RAW = "raw", "Raw"

    public_id = models.CharField(max_length=255, unique=True)
    url = models.URLField(max_length=500)
    resource_type = models.CharField(
        max_length=10,
        choices=ResourceType.choices,
        default=ResourceType.IMAGE,
    )
    delivery_type = models.CharField(max_length=20, default="upload")
    format = models.CharField(max_length=10, blank=True)

    width = models.PositiveIntegerField(null=True, blank=True)
    height = models.PositiveIntegerField(null=True, blank=True)
    duration = models.FloatField(null=True, blank=True, help_text="Seconds, video only")
    bytes = models.PositiveBigIntegerField(null=True, blank=True)

    alt_text = models.CharField(max_length=255, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    @property
    def aspect_ratio(self):
        if not self.width or not self.height:
            return None
        return round(self.width / self.height, 4)

    def __str__(self):
        return f"{self.public_id} ({self.resource_type})"

class Tag(models.Model):
    name = models.CharField(max_length=255)
    type = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=['name', 'type'],
                name='unique_tag_type_name'
            )
        ]

        indexes = [
            models.Index(
                fields=['type', '-created_at'],
                name='id_tag_type_create'
            )
        ]

        ordering = ['type', 'name']

    def __str__(self):
        return f"{self.type}: {self.name}"
