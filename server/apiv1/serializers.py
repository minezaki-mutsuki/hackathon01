from django.contrib.auth import get_user_model
from rest_framework import serializers

from models.post import Post

User = get_user_model()


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ["id", "user", "title", "text"]
