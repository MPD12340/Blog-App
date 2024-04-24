from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from .models import Blog
from django.http import JsonResponse
from .serializers import BlogSerializer

# Create your views here.


@api_view(["GET", "POST"])
def blog_list(request):
    """List all blog posts or create a new one"""

# Get all blogs
    if request.method == "GET":
        blogs = Blog.objects.all()
        serializer = BlogSerializer(blogs, many = True)
        response_data = {"success": True, "data": serializer.data}
        return JsonResponse(response_data)
    
# Create a new blog
    elif request.method == "POST":
        serializer = BlogSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            response_data = {"success": True, "data": serializer.data}
            return JsonResponse(response_data, status=status.HTTP_201_CREATED)
        response_data = {"success": False, "data": serializer.errors}
        return JsonResponse(response_data, status = status.HTTP_400_BAD_REQUEST)
    


@api_view(["GET", "PUT", "DELETE"])
def blog_detail(request, pk):
    """Retrieve, Update or Delete a blog."""
    try:
        blog = Blog.objects.get(pk = pk)
    except Blog.DoesNotExist:
        response_data = {"success": False, "data": "Blog not found"}
        return JsonResponse(response_data, status = status.HTTP_404_NOT_FOUND)
    
# Get a blog by it's ID
    if request.method == "GET":
        serializer = BlogSerializer(blog)
        response_data = {"success": True, "data": serializer.data}
        return JsonResponse(response_data, status = status.HTTP_200_OK)
    
# Update a blog by it's ID
    elif request.method == "PUT":
        serializer = BlogSerializer(blog, data = request.data)
        if serializer.is_valid():
            serializer.save()
            response_data = {"success": True, "data": serializer.data}
            return JsonResponse(response_data, status = status.HTTP_200_OK)
        response_data = {"success": False, "data": serializer.errors}
        return JsonResponse(response_data, status = status.HTTP_400_BAD_REQUEST)
    
# Delete a blog    
    elif request.method == "DELETE":
        blog.delete()
        response_data = {"success":True, "data":"Blog deleted successfully"}
        return JsonResponse(response_data, status = status.HTTP_200_OK)