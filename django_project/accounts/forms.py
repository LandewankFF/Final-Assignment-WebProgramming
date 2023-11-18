from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import CustomUser
from django import forms

class CustomUserCreationForm(UserCreationForm):
    
    class Meta:
        model = CustomUser
        fields = ('full_name', 'email')

class CustomUserChangeForm(UserChangeForm):
    
    class Meta:
        model = CustomUser
        fields = ('full_name', 'email')


'''
UserCreationForm
model form untuk membuat sebuah user baru. punya 3 default field (username, password1, password2).
memverifikasi kecocokan password1 dan password2, memvalidasi passwordnya mengunakan validate_password(),
dan set user password menggunakan set_password()

UserChangeForm
Sebuah form yang digunakan di interface django admin untuk mengubah data dan permission user
'''
