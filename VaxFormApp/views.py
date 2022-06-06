from urllib import response
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from VaxFormApp.models import Citizen 
from django.views.decorators.csrf import csrf_exempt


# Create your views here.
def index(request):
    citizens = Citizen.objects.all()
    print(citizens[0].FirstName)
    response = dict(FirstName = citizens[0].FirstName, Lastname = citizens[0].LastName)
    return JsonResponse(response)

def getcitizen(request):
    return HttpResponse('got citizen')

@csrf_exempt
def add_citizen(request):
    formdata = request.POST
    print(formdata)
    new_citizen = Citizen(FirstName=formdata['FirstName'], LastName=formdata['LastName'],DateOfBirth=formdata['DateOfBirth'],HomeAdress=formdata['HomeAdress'],City=formdata['City'],ZipCode=formdata['ZipCode'],LandLine=formdata['LandLine'],CellularPhone=formdata['CellularPhone'],BeenInfectedWithCovid=formdata['BeenInfectedWithCovid'])
    new_citizen.save()
    return HttpResponse('testing')