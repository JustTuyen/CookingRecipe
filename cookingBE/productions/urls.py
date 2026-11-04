from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, SubCategoryViewSet,CourseViewSet, ChildSubCategoryViewSet, DishViewSet,GrandChildCategoryViewSet
from django.urls import path, include

router = DefaultRouter()
router.register('category', CategoryViewSet, basename='category')
router.register('subcategory',SubCategoryViewSet, basename='subcategory')
router.register('course',CourseViewSet, basename='course')
router.register('childsubcategory',ChildSubCategoryViewSet, basename='childsubcategory')
router.register('grandchildcategory',GrandChildCategoryViewSet, basename='grandchildcategory')
router.register('dish',DishViewSet, basename='dish')

urlpatterns = [
    path('', include(router.urls)),
]
