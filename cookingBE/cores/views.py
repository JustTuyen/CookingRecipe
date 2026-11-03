from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import Status, Tag
from .serializer import StatusSerializers, TagSerializers

# Create your views here.
#status
class StatusViewSet(viewsets.ModelViewSet):
    queryset = Status.objects.all()
    serializer_class = StatusSerializers
    permission_classes = [permissions.AllowAny]

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializers
    permission_classes = [permissions.AllowAny]