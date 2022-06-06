from urllib import response
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from VaxFormApp.models import Citizen 

# Create your views here.
def index(request):
    citizens = Citizen.objects.all()
    print(citizens[0].FirstName)
    response = dict(FirstName = citizens[0].FirstName, Lastname = citizens[0].LastName)
    return JsonResponse(response)

def getcitizen(request):
    return HttpResponse('got citizen')