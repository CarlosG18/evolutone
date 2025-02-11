from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('users/', include('apps.users.urls'), name='users'),
    path('main/', include('apps.main.urls'), name='main'),
]
