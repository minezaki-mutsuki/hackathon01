import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models

from .school import School


class User(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    school = models.ForeignKey(School, default=0, on_delete=models.CASCADE)
    name = models.CharField(verbose_name="ユーザー名", max_length=20)
    email = models.EmailField(verbose_name="メールアドレス", max_length=255, unique=True)
    created_at = models.DateTimeField(verbose_name="登録日時", auto_now_add=True)
    updated_at = models.DateTimeField(verbose_name="更新日時", auto_now=True)
