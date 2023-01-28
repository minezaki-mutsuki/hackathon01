from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

from .comment import Comment
from .post import Post
from .school import School

User = get_user_model()

admin.site.register(User, UserAdmin)
admin.site.register(School)
admin.site.register(Post)
admin.site.register(Comment)
