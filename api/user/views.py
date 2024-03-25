from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .serializers import UserSerializer
from .models import Customuser
from django.http import JsonResponse, HttpResponse
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login, logout
import random
import re
import json
# Create your views here.




def generate_session_token(length=10):
    return ''.join(random.SystemRandom().choice([chr(i) for i in range(97, 123)] + [str(i) for i in range(10)]) for _ in range(length))

@csrf_exempt
def user_login(request):
    if not request.method == 'POST':
        return JsonResponse({'error': 'Send a post request with valid parameters only'})

    try:
        data = json.loads(request.body.decode())
        email = data.get("email","")
        password = data.get("password","")

        if not re.match("^[\w\.\+\-]+\@[\w]+\.[a-z]{2,3}$", email):
            return JsonResponse({'error': 'Enter a valid email'})

        if len(password) < 3:
            return JsonResponse({'error': 'Password needs to be at least of 3 char'})

        UserModel = get_user_model()

        try:
            user = UserModel.objects.get(email=email)

            if user.check_password(password):
                usr_dict = UserModel.objects.filter(email=email).values().first()
                usr_dict.pop('password')

                if user.session_token != "0":
                    user.session_token = "0"
                    user.save()
                    return JsonResponse({'error': "Previous session exists!"})

                token = generate_session_token()
                user.session_token = token
                user.save()
                # login(request, user) # This line seems unnecessary
                return JsonResponse({'token': token, 'user': usr_dict})
            else:
                return JsonResponse({'error': 'Invalid password'})

        except UserModel.DoesNotExist:
            return JsonResponse({'error': 'Invalid Email'})

    except json.JSONDecodeError:
        return JsonResponse({'error':"invalid json data"})


def signout(request, id):
    logout(request)

    UserModel = get_user_model()

    try:
        user = UserModel.objects.get(pk=id)
        user.session_token = "0"
        user.save()

    except UserModel.DoesNotExist:
        return JsonResponse({'error': 'Invalid user ID'})

    return JsonResponse({'success': 'Logout success'})

# create users using django authentication             
class UserViewSet(viewsets.ModelViewSet):
    permission_classes_by_action = {'create': [AllowAny]}

    queryset = Customuser.objects.all().order_by('id')
    serializer_class = UserSerializer

    def get_permissions(self):
        try:
            return [permission() for permission in self.permission_classes_by_action[self.action]]

        except KeyError:
            return [permission() for permission in self.permission_classes]
