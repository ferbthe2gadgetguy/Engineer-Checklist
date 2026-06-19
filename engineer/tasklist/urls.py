from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home") # Note to future me: views.home can be found in views.py
]

# git add .
# git commit -m "..."
# git push