from django.shortcuts import render

# Create your views here.
def login(request):
    return render(request, 'users/login.html')

def cadastro(request):
    return render(request, 'users/cadastro.html')

def resetar_password(request):
    return render(request, 'users/reset_password.html')

def reset1(request, token):
    return render(request, 'users/reset_password2.html')