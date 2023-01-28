from django.db import models


class School(models.Model):
    id = models.IntegerField(primary_key=True, editable=False)
    name = models.CharField(verbose_name="学校名", max_length=256)
