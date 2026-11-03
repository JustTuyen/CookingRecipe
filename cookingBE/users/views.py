from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import User, Save,Follow
from .serializers import UserSerializer, SaveSerializer, FollowSerializer

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

class SaveViewSet(viewsets.ModelViewSet):
    queryset = Save.objects.all()
    serializer_class = SaveSerializer
    permission_classes = [permissions.AllowAny]

class FollowViewSet(viewsets.ModelViewSet):
    queryset = Follow.objects.all()
    serializer_class = FollowSerializer
    permission_classes = [permissions.AllowAny]