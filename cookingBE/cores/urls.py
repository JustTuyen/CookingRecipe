from rest_framework.routers import DefaultRouter
from .views import StatusViewSet
from django.urls import path, include

router = DefaultRouter()
router.register('status', StatusViewSet, basename='status')
urlpatterns = [
    path('', include(router.urls)),
]
