var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'template/home.html',
        controller: 'HomeController'
    });
    $stateProvider.state('page', {
        url: '/page',
        templateUrl: 'template/page.html',
        controller: 'PageController'
    });
    $stateProvider.state('print', {
        url: '/print/:id',
        templateUrl: 'template/print.html',
        controller: 'PrintController'
    });
}]);

app.controller('HomeController', ['$scope', '$http', function ($scope, $http) {
    $http.get('data.json').success(function(data) {
        $scope.dummyData = data;
    });
    $scope.titlePage = 'Test';
}]);

app.controller('PageController', ['$scope', function ($scope) {
    $scope.firstName = 'Chaeng';
    $scope.lastName = 'Que';
}]);

app.controller('PrintController', ['$scope', '$stateParams', function ($scope, $stateParams) {
    $scope.dummyData = '{"code": 001, "title": "google", "url": "http://google.com"}';
    $scope.titlePage = 'Print';
    $scope.code = $stateParams.id;
    $scope.print = function (section) {
        var innerContents = document.getElementById(section).innerHTML;
        var popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
        popupWinindow.document.open();
        popupWinindow.document.write('<html><head></head><body onload="window.print()">' + innerContents + '</html>');
        popupWinindow.document.close();
    }
}]);