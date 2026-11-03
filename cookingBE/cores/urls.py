from rest_framework.routers import DefaultRouter
from .views import StatusViewSet, TagViewSet
from django.urls import path, include

router = DefaultRouter()
router.register('status', StatusViewSet, basename='status')
router.register('tag',TagViewSet, basename='tag')
urlpatterns = [
    path('', include(router.urls)),
]
