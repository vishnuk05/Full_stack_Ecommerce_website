from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import categoryviewset

router=DefaultRouter()
router.register(r'',categoryviewset)

urlpatterns=[
    path('',include(router.urls)),
    
]
