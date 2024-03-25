from django.db import models
from api.user.models import Customuser
from api.product.models import product
# Create your models here.
class order(models.Model):
    product_name=models.CharField(max_length=500,null=True, blank=True)
    total_products=models.CharField(max_length=100,default=0)
    transaction_id=models.CharField(max_length=100,default=0)
    total_amount=models.CharField(max_length=100,default=0)
    create_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)
    user=models.ForeignKey(Customuser, on_delete=models.CASCADE,null=True,blank=True)

    def __str__(self):
        return self.total_products
