from django.conf.urls import url

from django_js_routing import views

urlpatterns = [
    url(r'^$', views.index, name='routes')
]
