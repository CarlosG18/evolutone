from django.shortcuts import render

# Create your views here.
def dashboard(request):
    return render(request, 'main/dashboard.html', context={
        "dashboard_link": True,
    })

def repertorio(request):
    return render(request, 'main/repertorio.html', context={
        "repertorio_link": True,
    })

def tarefas(request):
    return render(request, 'main/tasks.html', context={
        "tasks_link": True,
    })