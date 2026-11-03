from rest_framework import serializers
from .models import User, Save,Follow


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id', 'email', 'birth_date', 
            'gender','role',
            'created_at', 'updated_at',
            'status'
        ]
        read_only_fields = ['created_at', 'updated_at']

class SaveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Save
        fields = [
            'id', 'user', 'dish', 
            'note', 'created_at',
        ]
        read_only_fields = ['created_at', 'id']

class FollowSerializer(serializers.ModelSerializer):
    class Meta:
        model = Follow
        fields = [
            'id', 'user', 'course', 
            'created_at',
        ]
        read_only_fields = ['created_at', 'id']