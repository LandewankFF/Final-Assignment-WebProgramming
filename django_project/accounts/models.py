from django.db import models
from django.contrib.auth.models import AbstractUser


class CustomUser(AbstractUser):
    full_name = models.CharField(max_length=200, blank=False)
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=50, blank=True)

    USERNAME_FIELD = 'email'  # unique identifier yang berguna untuk bedain 1 akun sama lain
    REQUIRED_FIELDS = ['full_name', 'username']  # field yg akan diminta jika user account dibuat dg perintah createsuperuser
    
    def __str__(self):
        return self.full_name
