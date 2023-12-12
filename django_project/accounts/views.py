from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.views.generic import CreateView
from .forms import CustomUserCreationForm
from django.contrib.auth.views import LoginView, LogoutView
from .models import CustomUser
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages


class SignUpView(CreateView):
    form_class = CustomUserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'authentication/login_register.html'
    
    def dispatch(self, request):
        if self.request.user.is_authenticated:
            return redirect('home')
        return super().dispatch(request)
    

def loginPage(request):
    if not request.user.is_authenticated:

        if request.method == "POST":
            email = request.POST.get('email')
            password = request.POST.get('password')

            try:
                user = CustomUser.objects.get(email=email)
            except:
                messages.error(request=request, message='User does not exist')
                return render(request=request, template_name='authentication/login_register.html')

            user = authenticate(
                request=request, email=email, password=password)

            if user is not None:
                login(request=request, user=user)
                return redirect('home')

            else:
                messages.error(request=request,
                               message='Email or password incorrect')

        return render(request=request, template_name='authentication/login_register.html')

    else:
        return redirect('home')

