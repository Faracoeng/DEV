from django.http import HttpResponse

  
HTML_STRING = """
<h1>Hello World</h1>
"""

def home_view(request, *args, **kwargs):

    # Pegar dados da base:
    # article_name
    # article_content

    # Renderizar em páginas do blo aqui



    return HttpResponse(HTML_STRING)