requirejs.config({
    baseUrl: 'bower_components',
    paths: {
        'angular': '../bower_components/angular/angular',
        'angular-resource': '../bower_components/angular-resource/angular-resource',
        'app' : '../scripts/app' // 'app' is the module name. It got defined by define() block, and  can be loaded by either require() or define() block
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-resource': {
            deps: ['angular'],
        }
    },
});



require(["app"], function(app) {
    console.log(app);
    app.controller("MyCtrl", ['$scope', '$resource',
        function($scope, $resource) {
            console.log("hello"); // this doesn't work
            $scope.items = [1, 3, 4, 5];
        }
    ]);

    angular.bootstrap(document, ['MyApp']);
});