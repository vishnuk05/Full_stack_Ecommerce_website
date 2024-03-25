from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class Customuser(AbstractUser):
    name= models.CharField(max_length=50,default='anonymous')
    email =models.EmailField(max_length=254,unique=True)
    phone=models.CharField(max_length=13,null=True,blank=True)
    gender=models.CharField(max_length=6,choices=(('Male','Male'),('Female','Female')))
    dateofbirth=models.DateField(null=True,blank=True)
    password=models.CharField(max_length=100,null=True,blank=True)
    session_token=models.CharField(max_length=100,default=0)
    create_at=models.DateTimeField(auto_now_add=True)
    updated_at=models.DateTimeField(auto_now=True)

    username=None  #username is not required in this system
    USERNAME_FIELD='email'
    REQUIRED_FIELDS=[]
    
    def __str__(self):
        return self.name
