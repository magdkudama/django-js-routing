var expect = chai.expect;

describe('Router', function() {
    describe('getRoutes', function() {

        it('should be an object', function() {
            var router = new Router();
            expect(router.getRoutes()).to.be.an('object');
        });

        it('should be empty', function() {
            var router = new Router();
            expect(router.getRoutes()).to.be.empty();
        });

        it('should have 2 routes', function() {
            var router = new Router({
                'index': {
                    'pattern': '/index/',
                    'parameters': []
                },
                'detail': {
                    'pattern': '/index/<id>/',
                    'parameters': ['id']
                }
            });

            expect(Object.keys(router.getRoutes()).length).to.be.equals(2);
        });
    });

    describe('reverse', function() {
        var router = new Router({
            'index': {
                'pattern': '/index/',
                'parameters': []
            },
            'detail': {
                'pattern': '/detail/<id>/',
                'parameters': ['id']
            },
            'multi': {
                'pattern': '/detail/<id>/more-detail/<uuid>/',
                'parameters': ['id', 'uuid']
            }
        });

        it('should throw exception when route is not found', function() {
            expect(function() {
                router.reverse('fake');
            }).to.throw('Route fake does not exist');
        });

        it('should throw exception when required parameter is not found', function() {
            expect(function() {
                router.reverse('detail', {});
            }).to.throw('Parameter id is required');

            expect(function() {
                router.reverse('multi', {id: 15});
            }).to.throw('Parameter uuid is required');
        });

        it('should work for routes with no parameters', function() {
            expect(router.reverse('index')).to.equal('/index/');
            expect(router.reverse('index', {})).to.equal('/index/');
        });

        it('should work for routes with 1 parameter', function() {
            expect(router.reverse('detail', {
                id: 12
            })).to.equal('/detail/12/');
        });

        it('should work for routes with more than > 1 parameters', function() {
            expect(router.reverse('multi', {
                id: 12,
                uuid: 15
            })).to.equal('/detail/12/more-detail/15/');
        });

        it('should add extra parameters to url', function() {
            expect(
                router.reverse('index', {
                    id: 12,
                    test: 'hello'
                })
            ).to.equal('/index/?id=12&test=hello');

            expect(
                router.reverse('detail', {
                    id: 12,
                    test: 'hello'
                })
            ).to.equal('/detail/12/?test=hello');
        });
    });
});
