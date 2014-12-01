from django.conf.urls import url

from polls import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^(?P<id>[0-9]{4})/details/$', views.detail, name='detail'),
]
