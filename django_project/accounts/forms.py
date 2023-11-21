from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import CustomUser
from django import forms
import re

class CustomUserCreationForm(UserCreationForm):
    
    class Meta:
        model = CustomUser
        fields = ('full_name', 'email')

    def clean(self):
        cleaned_data = super().clean()
        full_name = cleaned_data.get('full_name')

        if full_name and not re.match(r"^[a-zA-Z ]+$", full_name):
            self.add_error(
                'full_name', 'Full name contains spaces and alphabets only')

        elif full_name and len(full_name) < 12:
            self.add_error(
                'full_name', 'Full name should be at least 12 characters long')
            

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
