from django.db import models
from django.utils import timezone
from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField


class Post(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey(
        'auth.User',
        on_delete=models.CASCADE,
    )
    preview = RichTextUploadingField(blank=True, null=True)
    body = RichTextUploadingField(blank=True, null=True)
    created_date = models.DateTimeField(default=timezone.now)
    published_date = models.DateTimeField(blank=True, null=True)
 
    def __str__(self):
        return self.title
# Create your models here.

    def publish(self):
        self.published_date = timezone.now()
        self.save()