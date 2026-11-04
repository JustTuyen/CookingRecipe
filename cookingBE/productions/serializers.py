from rest_framework import serializers
from .models import (Category, SubCategory,Course, Dish, Ingredient, DishIngredient
,ChildSubCategory,GrandChildCategory)

class CategorySerializer(serializers.ModelSerializer):
    status_name = serializers.CharField(source="status.name", read_only=True)
    class Meta:
        model = Category
        fields = [
            'id', 'name', 'description', 'created_at', 'updated_at',
            'status','status_name'
        ]
        read_only_fields = ['created_at', 'updated_at']

class SubCategorySerializer(serializers.ModelSerializer):
    status_name = serializers.CharField(source="status.name", read_only=True)
    category_name = serializers.CharField(source="category.name", read_only=True)
    class Meta:
        model = SubCategory
        fields = [
            'id', 'name', 'description', 'created_at', 'updated_at',
            'status','status_name',
            'category','category_name',
        ]
        read_only_fields = ['created_at', 'updated_at']

class ChildSubCategorySerializer(serializers.ModelSerializer):
    status_name = serializers.CharField(source="status.name", read_only=True)
    subcategory_name = serializers.CharField(source="subCategory.name", read_only=True)
    class Meta:
        model = ChildSubCategory
        fields = [
            'id', 'name', 'description', 'created_at', 'updated_at',
            'status','status_name',
            'subCategory','subcategory_name',
        ]
        read_only_fields = ['created_at', 'updated_at']

class GrandChildCategorySerializer(serializers.ModelSerializer):
    status_name = serializers.CharField(source="status.name", read_only=True)
    class Meta:
        model = Ingredient
        fields = [
            'id','description','created_at','updated_at',
            'status', 'status_name',
            'media'
        ]
        read_only_fields = ['id','created_at', 'updated_at']

class DishIngredientSerializer(serializers.ModelSerializer):
    ingredient_name = serializers.CharField(source="ingredient.name", read_only=True)
    class Meta:
        model = DishIngredient
        fields = [
            "id",
            "dish",
            "ingredient",
            "ingredient_name",
            "quantity",
            "unit",
            "note",
        ]
        read_only_fields = ['id']
        