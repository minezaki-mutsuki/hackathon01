from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register("posts", views.PostViewSet)
router.register("comments", views.CommentViewSet)
router.register("accounts", views.UserViewSet)

app_name = "apiv1"
urlpatterns = [
    path("", include(router.urls))
]
