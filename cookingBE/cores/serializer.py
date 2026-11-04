from rest_framework import serializers
from .models import Status, Tag, Media

#status
class StatusSerializers(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields = [
            'id', 'type', 'name', 'created_at', 'updated_at'
        ]
        read_only_fields = ['created_at', 'updated_at']

class MediaSerializer(serializers.ModelSerializer):
    aspect_ratio = serializers.FloatField(read_only=True)
    class Meta:
        model = Media
        fields = [
            "id", "public_id", "url", "resource_type", "delivery_type",
            "format", "width", "height", "duration", "bytes",
            "aspect_ratio", "alt_text", "created_at",
        ]
        read_only_fields = fields

class TagSerializers(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = [
            'id','type','name','created_at', 'updated_at'
        ]
        read_only_fields = ['created_at', 'updated_at']