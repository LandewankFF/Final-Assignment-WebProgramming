from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.views.generic import CreateView
from .forms import CustomUserCreationForm
from django.contrib.auth.views import LoginView, LogoutView

class SignUpView(CreateView):
    form_class = CustomUserCreationForm
    success_url = reverse_lazy('login')
    template_name = 'authentication/login_register.html'
    
    def dispatch(self, request):
        if self.request.user.is_authenticated:
            return redirect('home')
        return super().dispatch(request)
    
class CustomLoginView(LoginView):
    redirect_authenticated_user = True
    template_name = 'authentication/login_register.html'

