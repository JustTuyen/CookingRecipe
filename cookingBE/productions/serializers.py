from rest_framework import serializers
from .models import Category, SubCategory,Course

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = [
            'id', 'name', 'description', 'created_at', 'updated_at',
            'status'
        ]
        read_only_fields = ['created_at', 'updated_at']

class SubCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SubCategory
        fields = [
            'id', 'name', 'description', 'created_at', 'updated_at',
            'status','category','media'
        ]
        read_only_fields = ['created_at', 'updated_at']

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = [
            'id', 'name', 'description', 'created_at', 'updated_at',
            'tags','status','media'
        ]
        read_only_fields = ['created_at', 'updated_at']

    