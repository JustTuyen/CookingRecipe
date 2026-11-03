from rest_framework.routers import DefaultRouter
from .views import UserViewSet, SaveViewSet,FollowViewSet
from django.urls import path, include

router = DefaultRouter()
router.register('user', UserViewSet, basename='user')
router.register('save',SaveViewSet, basename='save')
router.register('follow',FollowViewSet, basename='follow')

urlpatterns = [
    path('', include(router.urls)),
]
