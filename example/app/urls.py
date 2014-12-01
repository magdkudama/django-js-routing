from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
    url(r'^example/', include('example.urls')),
    url(r'^django_js_routing/', include('django_js_routing.urls', namespace='django_js_routing')),
)
