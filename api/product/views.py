from django.shortcuts import render
from rest_framework import viewsets
from .models import product
from .serializers import productSerializer
# Create your views here.
class productviewset(viewsets.ModelViewSet):
    queryset=product.objects.all()
    serializer_class=productSerializer
