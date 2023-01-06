from django.contrib import admin
from django.urls import path, include # новое изменение
 
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('blog.urls')), # новое изменение
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

