from django.http import HttpResponse

  
HTML_STRING = """
<h1>Hello World</h1>
"""

def home_view(request, *args, **kwargs):
    return HttpResponse(HTML_STRING)