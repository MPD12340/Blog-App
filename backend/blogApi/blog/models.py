from django.db import models

# Create your models here.


class Blog(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    date = models.DateField(auto_now_add=True)


# Order by date i.e. post created at last will be displayed first
class Meta:
    ordering = ["-date"]


# This __str__ method gives short info about our each blog post
def __str__(self):
    return self.title
