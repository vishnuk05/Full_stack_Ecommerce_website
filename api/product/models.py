from django.db import models
from api.category.models import category
# Create your models here.

class product(models.Model):
    name=models.CharField(max_length=40)
    description=models.CharField(max_length=200,null=True)
    price=models.DecimalField(max_digits=10,decimal_places=2)
    category=models.ForeignKey(category, on_delete=models.CASCADE)
    image=models.ImageField(upload_to='images/')
    stock=models.CharField(max_length=15)  # it can be either "In Stock" or "Out of Stock"
    is_active=models.BooleanField(default=True,null=True)
    created_at=models.DateTimeField(auto_now_add=True, null=True)
    updated_at=models.DateTimeField(auto_now=True, null=True)
    def __str__(self):
        return self.name
    
    

