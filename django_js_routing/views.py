import json
import re

from django.conf import settings
from django.contrib.admindocs.views import simplify_regex
from django.http import HttpResponse
from django.template import RequestContext, loader

from django_js_routing.utils import extract_views_from_urlpatterns


def index(request):
    urlconf = __import__(settings.ROOT_URLCONF, {}, {}, ['urlpatterns'])
    view_functions = extract_views_from_urlpatterns(urlconf.urlpatterns)

    resultant_routes = {}
    for (func, regex, name) in view_functions:
        if name in settings.EXPOSED_ROUTES:
            simplified_regex = simplify_regex(regex)

            resultant_routes[name] = {}
            resultant_routes[name]['pattern'] = simplified_regex
            resultant_routes[name]['parameters'] = re.findall('<(.*)>', simplified_regex)

    template = loader.get_template('django_js_routing/routes.js')

    context = RequestContext(request, {
        'routes': json.dumps(resultant_routes)
    })

    response = HttpResponse(
        template.render(context),
        content_type='application/javascript'
    )

    return response
