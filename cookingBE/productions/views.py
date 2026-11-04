from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import Category, SubCategory,Course, ChildSubCategory, Dish,GrandChildCategory
from .serializers import (CategorySerializer, SubCategorySerializer, DishSerializer,CourseSerializer, ChildSubCategorySerializer,GrandChildCategorySerializer)

# Create your views here.

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [permissions.AllowAny]


class SubCategoryViewSet(viewsets.ModelViewSet):
    queryset = SubCategory.objects.all()
    serializer_class = SubCategorySerializer
    permission_classes = [permissions.AllowAny]


class ChildSubCategoryViewSet(viewsets.ModelViewSet):
    queryset = ChildSubCategory.objects.all()
    serializer_class = ChildSubCategorySerializer
    permission_classes = [permissions.AllowAny]

class GrandChildCategoryViewSet(viewsets.ModelViewSet):
    queryset = GrandChildCategory.objects.all()
    serializer_class = GrandChildCategorySerializer
    permission_classes = [permissions.AllowAny]


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [permissions.AllowAny]

class DishViewSet(viewsets.ModelViewSet):
    queryset = Dish.objects.all()
    serializer_class = DishSerializer
    permission_classes = [permissions.AllowAny]