var app = angular.module('app', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider
            .when('/', {
                templateUrl: 'views/index.html'
                , controller: 'indexCtrl'
            })
            .when('/contato/?', {
                templateUrl: 'views/contato.html'
                , controller: 'contatoCtrl'
            })
            .when('/404/?', {
                templateUrl: 'views/404.html'
                , controller: 'notFoundCtrl'
            })
            .otherwise({
                redirectTo: '/404'
            });
    }
]);

app.controller('indexCtrl', function($scope) {
    $scope.pageClass = 'index';
});
app.controller('contatoCtrl', function($scope) {
    $scope.pageClass = 'contato';
});
app.controller('notFoundCtrl', function($scope) {
    $scope.pageClass = 'notFound';
});
