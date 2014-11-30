"use strict";

function Router(routes) {
    this.__routes = routes || {};
}

Router.prototype.getRoutes = function() {
    return this.__routes;
}

Router.prototype.reverse = function(key, parameters) {
    var parameters = parameters || {};
    var route = this.__routes[key];

    if (route === undefined) {
        throw new Error('Route ' + key + ' does not exist');
    }

    var resultantRoute = route['pattern'];
    route['parameters'].forEach(function(parameter) {
        if (!(parameter in parameters)) {
            throw new Error('Parameter ' + parameter + ' is required');
        }

        resultantRoute = resultantRoute.replace(
            new RegExp("<" + parameter + ">"),
            parameters[parameter]
        );
    });

    var diff = Object.keys(parameters).filter(function(i) {
        return route['parameters'].indexOf(i) === -1;
    });

    var queryStrings = diff.map(function(element) {
        return (element + '=' + parameters[element])
    });

    var additional = queryStrings.join('&');

    return (additional !== '') ? (resultantRoute + '?' + additional) : resultantRoute;
}
