from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index),
    path('getcitizen', views.getcitizen),
    path('add-citizen', views.add_citizen)
]