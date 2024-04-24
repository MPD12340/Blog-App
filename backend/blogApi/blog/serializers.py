from rest_framework import serializers
from blog.models import Blog

#Using model serializer instead of normal one to reduce code duplication
class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'title', 'content', 'date']