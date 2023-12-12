from typing import Any
from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import CustomUser
from django.forms import TextInput, EmailInput
import re


class CustomUserCreationForm(UserCreationForm):

    class Meta:
        model = CustomUser
        fields = ('full_name', 'email')

    # form validation
    def clean(self):
        cleaned_data = super().clean()
        full_name = cleaned_data.get('full_name')

        if full_name and not re.match(r"^[a-zA-Z ]+$", full_name):
            self.add_error(
                'full_name', 'Full name contains spaces and alphabets only')

        elif full_name and len(full_name) < 12:
            self.add_error(
                'full_name', 'Full name should be at least 12 characters long')

    def __init__(self, *args: Any, **kwargs: Any) -> None:
        super().__init__(*args, **kwargs)

        self.fields['full_name'].required = False
        self.fields['email'].required = False
        self.fields['password1'].required = False
        self.fields['password2'].required = False


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
