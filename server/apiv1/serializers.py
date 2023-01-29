from django.contrib.auth import get_user_model
from rest_framework import serializers

from models.comment import Comment
from models.post import Post

User = get_user_model()


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ["id", "user", "title", "text"]


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ["id", "user", "comment_at", "text"]
