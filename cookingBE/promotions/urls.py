from rest_framework.routers import DefaultRouter
from .views import BannerViewSet,PostViewSet
from django.urls import path, include

router = DefaultRouter()
router.register('banner', BannerViewSet, basename='banner')
router.register('post',PostViewSet, basename='post')

urlpatterns = [
    path('', include(router.urls)),
]
