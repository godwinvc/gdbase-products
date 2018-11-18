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
  })
angular.bootstrap(document.querySelector('body'), ['myapp']);