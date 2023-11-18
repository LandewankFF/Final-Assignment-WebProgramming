from django.urls import path
from .views import SignUpView, LogoutView, CustomLoginView
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    path('login/', CustomLoginView.as_view(), name='login'),
    path('logout/', LogoutView.as_view(),name='logout'),
    
    path('password_reset/', auth_views.PasswordResetView.as_view(
        template_name='authentication/password_reset_form.html'), name='reset_password'),
    
    path('password_reset_done/', auth_views.PasswordResetDoneView.as_view(
        template_name='authentication/password_reset_done.html'), name='password_reset_done'),
    
    path('reset/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(
        template_name='authentication/password_reset_confirm.html'), name='password_reset_confirm'),
    
    path('reset_password_complete/', auth_views.PasswordResetCompleteView.as_view(
        template_name='authentication/password_reset_complete.html'), name='password_reset_complete'),
]