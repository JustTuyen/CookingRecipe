from rest_framework import serializers
from django.db.models import ProtectedError
from django.db import transaction
from cores.service import upload_media, delete_cloudinary_asset
from cores.serializer import MediaSerializer
from .models import (Category, SubCategory,Course, Dish, Ingredient, DishIngredient, Direction,
ChildSubCategory,GrandChildCategory)

############
#nest media for better info secured, load time etc etc
#add time out for loading g




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
    image = serializers.ImageField(write_only=True, required=False)
    media_detail = MediaSerializer(source="media", read_only=True)
    status_name = serializers.CharField(source="status.name", read_only=True)
    category_name = serializers.CharField(source="category.name", read_only=True)
    alt_text = serializers.CharField(write_only=True, required=False, allow_blank=True)
    class Meta:
        model = SubCategory
        fields = [
            'id', 'name', 'description', 'created_at', 'updated_at',
            'status','status_name',
            'image','media_detail','alt_text',
            'category','category_name',
        ]
        read_only_fields = ['created_at', 'updated_at']
    def create(self, validated_data):
        image = validated_data.pop("image",None)
        alt_text = validated_data.pop("alt_text", "")
        if image:
            validated_data["media"] = upload_media(image, folder="subcategories", alt_text=alt_text)
        return super().create(validated_data)
    
    def update(self, instance,validated_data):
        image = validated_data.pop("image", None)
        alt_text = validated_data.pop("alt_text", None)
        old_media = instance.media
        if image:
            validated_data["media"] = upload_media(image, folder="subcategories", alt_text=alt_text)
        instance = super().update(instance, validated_data)

        if image and old_media:
            try:
                old_media.delete()
            except ProtectedError:
                pass
            else:
                delete_cloudinary_asset(old_media)
        elif alt_text is not None and instance.media:
            instance.media.alt_text = alt_text
            instance.media.save(update_fields=['alt_text'])
        return instance

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
    childSubCategory_name = serializers.CharField(source="childSubCategory.name", read_only=True)
    class Meta:
        model = GrandChildCategory
        fields = [
            'id', 'name', 'description', 'created_at', 'updated_at',
            'status','status_name',
            'childSubCategory','childSubCategory_name',
        ]
        read_only_fields = ['created_at', 'updated_at']

class CourseSerializer(serializers.ModelSerializer):
    status_name = serializers.CharField(source="status.name", read_only=True)
    class Meta:
        model = Course
        fields = [
            'id', 'name', 'description', 'created_at', 'updated_at',
            'status','status_name',
        ]
        read_only_fields = ['created_at', 'updated_at']

class IngredientSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(write_only=True, required=False)
    media_detail = MediaSerializer(source="media", read_only=True)
    status_name = serializers.CharField(source="status.name", read_only=True)
    alt_text = serializers.CharField(write_only=True, required=False, allow_blank=True)
    class Meta:
        model = Ingredient
        fields = [
            'id','name','description','created_at','updated_at',
            'status', 'status_name',
            'image','media_detail','alt_text',
        ]
        read_only_fields = ['id','created_at', 'updated_at']
    def create(self, validated_data):
        image = validated_data.pop("image",None)
        alt_text = validated_data.pop("alt_text", "")
        if image:
            validated_data["media"] = upload_media(image, folder="ingredients", alt_text=alt_text)
        return super().create(validated_data)
    
    def update(self, instance,validated_data):
        image = validated_data.pop("image", None)
        alt_text = validated_data.pop("alt_text", None)
        old_media = instance.media
        if image:
            validated_data["media"] = upload_media(image, folder="ingredients", alt_text=alt_text)
        instance = super().update(instance, validated_data)

        if image and old_media:
            try:
                old_media.delete()
            except ProtectedError:
                pass
            else:
                delete_cloudinary_asset(old_media)
        elif alt_text is not None and instance.media:
            instance.media.alt_text = alt_text
            instance.media.save(update_fields=['alt_text'])
        return instance


class DishIngredientNestedSerializer(serializers.ModelSerializer):
    ingredient_name = serializers.CharField(source="ingredient.name", read_only=True)
    class Meta:
        model = DishIngredient
        fields = [
            "id",
            "ingredient",
            "ingredient_name",
            "quantity",
            "unit",
            "note",
        ]
        read_only_fields = ['id',"dish"]



class DirectionSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(write_only=True, required=False)
    media_detail = MediaSerializer(source="media", read_only=True)
    alt_text = serializers.CharField(write_only=True, required=False, allow_blank=True)
    class Meta:
        model = Direction
        fields = [
            'id','step_number','duration','instruction',
            'dish',
            'created_at', 'updated_at',
            'image','media_detail','alt_text',
        ]

        read_only_fields = ['created_at', 'updated_at']
    def create(self, validated_data):
        image = validated_data.pop("image",None)
        alt_text = validated_data.pop("alt_text", "")
        if image:
            validated_data["media"] = upload_media(image, folder="directions", alt_text=alt_text)
        return super().create(validated_data)
    
    def update(self, instance,validated_data):
        image = validated_data.pop("image", None)
        alt_text = validated_data.pop("alt_text", None)
        old_media = instance.media
        if image:
            validated_data["media"] = upload_media(image, folder="directions", alt_text=alt_text)
        instance = super().update(instance, validated_data)

        if image and old_media:
            try:
                old_media.delete()
            except ProtectedError:
                pass
            else:
                delete_cloudinary_asset(old_media)
        elif alt_text is not None and instance.media:
            instance.media.alt_text = alt_text
            instance.media.save(update_fields=['alt_text'])
        return instance


class DishSerializer(serializers.ModelSerializer):
    childsubcategory_name = serializers.CharField(source="childsubcategory.name", read_only=True)
    grandsubcategory_name = serializers.CharField(source="grandsubcategory.name", read_only=True)
    status_name = serializers.CharField(source="status.name", read_only=True)
    dish_ingredients = DishIngredientNestedSerializer(many=True, required=False)
    directions = DirectionSerializer(many=True, required=False)

    class Meta:
        model = Dish
        fields = [
            'id','name','description','created_at','updated_at',
            'user',
            'directions',
            'cooking_time','prep_time','total_time','serving','yields','difficulty',
            'childsubcategory','childsubcategory_name',
            'grandsubcategory','grandsubcategory_name',
            'status','status_name',
            'course',
            "dish_ingredients",
        ]
        read_only_fields = ['id','created_at', 'updated_at']

    def validate_dish_ingredients(self, items):
        # The unique (dish, ingredient) validator doesn't run on nested data,
        # so check duplicates in the payload ourselves.
        ids = [item["ingredient"].id for item in items]
        if len(ids) != len(set(ids)):
            raise serializers.ValidationError("Duplicate ingredients are not allowed.")
        return items
    
    @transaction.atomic
    def create(self, validated_data):
        items = validated_data.pop("dish_ingredients", [])
        dish = super().create(validated_data)
        DishIngredient.objects.bulk_create(
            [DishIngredient(dish=dish, **item) for item in items]
        )
        return dish

    @transaction.atomic
    def update(self, instance, validated_data):
        items = validated_data.pop("dish_ingredients", None)
        instance = super().update(instance, validated_data)
        if items is not None:
            # Replace the whole list when it's provided; leave it alone if omitted
            instance.dish_ingredients.all().delete()
            DishIngredient.objects.bulk_create(
                [DishIngredient(dish=instance, **item) for item in items]
            )
        return instance