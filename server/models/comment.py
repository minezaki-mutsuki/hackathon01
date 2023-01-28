import uuid

from django.contrib.auth import get_user_model
from django.db import models

from .post import Post

User = get_user_model()


class Comment(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment_at = models.ForeignKey(Post, on_delete=models.CASCADE)
    text = models.CharField(verbose_name="本文", max_length=400)
    created_at = models.DateTimeField(verbose_name="登録日時", auto_now_add=True)
    updated_at = models.DateTimeField(verbose_name="更新日時", auto_now=True)
