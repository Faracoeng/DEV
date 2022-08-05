from django.db import models

# Create your models here.

class Blog(models.Model):
    #Armazenando artigos do blog
    title = models.TextField()
    content = models.TextField()