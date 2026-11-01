from django.shortcuts import render
from rest_framework import viewsets, permissions
from .models import Status
from .serializer import StatusSerializers

# Create your views here.
#status
class StatusViewSet(viewsets.ModelViewSet):
    queryset = Status.objects.all()
    serializer_class = StatusSerializers
    permission_classes = [permissions.AllowAny]