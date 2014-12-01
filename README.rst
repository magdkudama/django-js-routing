Django JS Routing
=================

**django-js-routing** is a simple

It's based on the Symfony's [JsRoutingBundle](https://github.com/FriendsOfSymfony/FOSJsRoutingBundle), but simplified, of course :)

Installation & usage
--------------------

1. Install using pip:

        pip install django-js-routing

2. Add to INSTALLED_APPS:

        INSTALLED_APPS = (
            ...
            'django_js_routing',
        )

3. Add the URL's to settings/urls.py file:

        urlpatterns = patterns('',
            ...
            url(r'^django_js_routing/', include('django_js_routing.urls', namespace='django_js_routing')),
        )

4. Name your routes and add them to settings.py, under:

        EXPOSED_ROUTES = (
            'exposed_route',
            'exposed_route_2',
            ...
        )

5. Add required scripts to your HTML:

        {% load staticfiles %}
        <script src="{% static 'django_js_routing/router.min.js' %}"></script>
        <script src="{% url 'django_js_routing:routes' %}"></script>

6. Use it!

        var url = DjangoUrl.reverse('exposed_route', {param1: 12, param2: 15});

About
-----

**django-js-routing** is written by Magd Kudama (magdkudama@gmail.com)

License
-------

You can use this library under the MIT license. See the LICENSE file for details
