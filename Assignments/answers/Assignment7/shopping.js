var app = angular.module("shoppingList", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/checkout', {
        templateUrl: '/views/checkout.html',
    })

    .when('/', {
        templateUrl: '/views/index.html',
    })

}]);
app.controller("shoppingController", function($scope) {

    $scope.total = 0;
    $scope.discount = 0;
    $scope.finalAmount = 0;
    $scope.items = [{

            name: 'apple',

            quantity: 1,

            cost: 2
        },

        {

            name: 'orange',

            quantity: 1,

            cost: 1
        }, {
            name: 'banana',
            quantity: 2,
            cost: 2
        }, {
            name: 't-shirt',
            quantity: 2,
            cost: 10
        }, {
            name: 'top',
            quantity: 2,
            cost: 8
        }, {
            name: 'sandals',
            quantity: 1,
            cost: 19
        }, {
            name: 'sport shoes',
            quantity: 1,
            cost: 30
        }, {
            name: 'floral-dress',
            quantity: 1,
            cost: 40
        }, {
            name: 'striped-dress',
            quantity: 1,
            cost: 42
        }, {
            name: 'sneakers',
            quantity: 1,
            cost: 30
        }, {
            name: 'hand-jewellery',
            quantity: 1,
            cost: 5
        }


    ];

    $scope.removeItem = function(index) {
            $scope.items.splice(index, 1);
        },

        $scope.addItem = function() {
            $scope.items.push({
                name: '',
                quantity: 0,
                cost: 0
            });
        },

        $scope.calculateTotal = function() {
            var total = 0
            angular.forEach($scope.items, function(item) {
                total += item.quantity * item.cost;
            })

            $scope.total = total;
		$scope.taxAmount = 0.0625 * $scope.total;
            return $scope.total;

        },


        $scope.applycode = function(code) {

            if (code == 'DISCOUNT5') {
                $scope.discount = 0.05 * $scope.total;
                $scope.discount_value = 'DISCOUNT5' ;
                $scope.finalAmount = $scope.total - $scope.discount - $scope.taxAmount;
            } else if (code == 'DISCOUNT10') {
                $scope.discount = 0.1 * $scope.total;
                $scope.discount_value = 'DISCOUNT10';
                $scope.finalAmount = $scope.total - $scope.discount - $scope.taxAmount;
            } else if (code == 'DISCOUNT15') {
                $scope.discount = 0.15 * $scope.total;
                $scope.discount_value = 'DISCOUNT15';
                $scope.finalAmount = $scope.total - $scope.discount - $scope.taxAmount;
            } else if (code == 'DISCOUNT20') {
                $scope.discount = 0.2 * $scope.total;
                $scope.discount_value = 'DISCOUNT20';
                $scope.finalAmount = $scope.total - $scope.discount - $scope.taxAmount;
            } else {
                $scope.discount_value = 'N/A';
		$scope.discount = 0;
                $scope.finalAmount = $scope.total - $scope.discount - $scope.taxAmount
            }


        }



});