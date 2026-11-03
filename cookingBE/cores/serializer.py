from rest_framework import serializers
from .models import Status, Tag

#status
class StatusSerializers(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields = [
            'id', 'type', 'name', 'created_at', 'updated_at'
        ]
        read_only_fields = ['created_at', 'updated_at']

class TagSerializers(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = [
            'id','type','name','created_at', 'updated_at'
        ]
        read_only_fields = ['created_at', 'updated_at']