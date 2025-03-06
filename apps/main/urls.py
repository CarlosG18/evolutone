from django.contrib import admin
from django.urls import path
from . import views

app_name = 'main'
urlpatterns = [
    path('dashboard/', views.dashboard, name='dashboard'),
    path('repertorio/', views.repertorio, name='repertorio'),
    path('tarefas/', views.tarefas, name='tarefas'),
]
