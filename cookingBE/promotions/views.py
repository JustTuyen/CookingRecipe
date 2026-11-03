from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import Banner, Post
from .serializers import BannerSerializer, PostSerializer

# Create your views here.
class BannerViewSet(viewsets.ModelViewSet):
    queryset = Banner.objects.all()
    serializer_class = BannerSerializer
    permission_classes = [permissions.AllowAny]

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.AllowAny]

