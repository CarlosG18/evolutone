from django.contrib import admin
from django.urls import path
from . import views

app_name = 'users'
urlpatterns = [
    path('login/', views.login, name='login'),
    path('cadastro/', views.cadastro, name='cadastro'),
    path('resetar-senha/', views.resetar_password, name='resetar_password1'),
    path('resetar-senha/<str:token>/', views.reset1, name='resetar_password2'),
]
