from rest_framework import serializers
from .models import Status

#status
class StatusSerializers(serializers.ModelSerializer):
    class Meta:
        model = Status
        fields = [
            'id', 'type', 'name', 'created_at', 'updated_at'
        ]

        read_only_fields = ['created_at', 'updated_at']