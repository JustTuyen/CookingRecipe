from rest_framework import serializers
from .models import Banner, Post

class BannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banner
        fields = [
            'id', 'name', 'description', 'created_at', 'updated_at',
            'note','display_order','router_to',
            'status','media'
        ]
        read_only_fields = ['created_at', 'updated_at']

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = [
            'id', 'title', 'context', 'created_at', 'updated_at',
            'status','media'
        ]
        read_only_fields = ['created_at', 'updated_at']
