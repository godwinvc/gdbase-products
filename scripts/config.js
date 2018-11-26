angular.module('myapp', ['ngSanitize'])
  .controller('mainController', function ($scope, $timeout, $http, $sce) {
    $timeout(function () {
      customScroll($);
      $('.left-container').mCustomScrollbar({
        theme: "dark-3",
        scrollButtons: {
          enable: true
        }
      });
      $('.description').mCustomScrollbar({
        theme: "dark-3",
        scrollButtons: {
          enable: true
        }
      });
    }, 1000);
    $scope.list = [{
      items: []
    }];
    $scope.trustSrc = function (src) {
      return $sce.trustAsResourceUrl(src);
    }
    $http.get(baseURL + 'database/products.json')
      .then(res => {
        $scope.list = res.data;
        $scope.list.forEach(element => {
          element.items.forEach(item => {
            item.id = Math.random() * 100
          })
        });
        $scope.selectedItem = $scope.list[0].items[0];
      })
    $scope.getSelected = function (item) {
      $scope.selectedItem = item;
    }
    $scope.continueShopping = function (item) {
      $.post(location.href, { "quantity": "1", "add-to-cart": item.productId }, function (data) {
        console.log(item.title + "with ID: " + item.productId + "has been added to cart");
        location.href = location.href;
      })
    }
    $scope.goToCheckout = function (item) {
      $.post(location.href, { "quantity": "1", "add-to-cart": item.productId }, function (data) {
        console.log(item.title + "with ID: " + item.productId + "has been added to cart");
        location.href = "https://www.gdbase.be/panier/";
      });
    }
  })
angular.bootstrap(document.querySelector('body'), ['myapp']);
