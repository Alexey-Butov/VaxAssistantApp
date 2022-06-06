from django.db import models

# Create your models here.

class Citizen(models.Model):
    CitizenId = models.AutoField(primary_key=True)
    FirstName = models.CharField(max_length=50)
    LastName = models.CharField(max_length=50)
    DateOfBirth = models.DateField()
    HomeAdress = models.CharField(max_length=100)
    City = models.CharField(max_length=100)
    ZipCode = models.PositiveIntegerField()
    LandLine = models.CharField(max_length=12)
    CellularPhone = models.CharField(max_length=12)
    BeenInfected = models.BooleanField(default=False)
    BackGroundDiseases = models.CharField(max_length=100)
    

