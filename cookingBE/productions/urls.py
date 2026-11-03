from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, SubCategoryViewSet,CourseViewSet
from django.urls import path, include

router = DefaultRouter()
router.register('category', CategoryViewSet, basename='category')
router.register('subcategory',SubCategoryViewSet, basename='subcategory')
router.register('course',CourseViewSet, basename='course')

urlpatterns = [
    path('', include(router.urls)),
]
