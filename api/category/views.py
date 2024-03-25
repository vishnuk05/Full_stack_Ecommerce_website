from django.shortcuts import render
from rest_framework import viewsets
from .models import category
from .serializers import categorySerializer

# Create your views here.

class categoryviewset(viewsets.ModelViewSet):
    queryset=category.objects.all().order_by('id')
    serializer_class =categorySerializer


