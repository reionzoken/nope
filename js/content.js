var app = angular.module('nope-app', ['ngSanitize']);
app.controller('nope-controller', function($scope, $http){



  
  $http({
    method: "GET",
    url: "https://spreadsheets.google.com/feeds/cells/1-PraHY5Y4IBOdcFzXykeNWdEdQ0nGFWDG0AKBpTLLGw/2/public/values?alt=json"
  }).then(function (response){
    $scope.sheets = response.data;
    $scope.sheets = JSON.parse($scope.sheets["feed"]["entry"][0]["content"]["$t"]);
    console.log($scope.sheets);
  },function (error){
  });  

  $http({
    method: "GET",
    url: "https://spreadsheets.google.com/feeds/cells/1-PraHY5Y4IBOdcFzXykeNWdEdQ0nGFWDG0AKBpTLLGw/4/public/values?alt=json"
  }).then(function (response){
    $scope.times = response.data;
    $scope.times = JSON.parse($scope.times["feed"]["entry"][0]["content"]["$t"]);
    console.log($scope.times);
  },function (error){
  });

  $http({
    method: "GET",
    url: "https://spreadsheets.google.com/feeds/cells/1-PraHY5Y4IBOdcFzXykeNWdEdQ0nGFWDG0AKBpTLLGw/6/public/values?alt=json"
  }).then(function (response){
    $scope.recruitment = response.data;
    $scope.recruitment = JSON.parse($scope.recruitment["feed"]["entry"][0]["content"]["$t"]);
    console.log($scope.recruitment);
  },function (error){
  });


  $scope.$watch('recruitment', function(newValue, oldValue){
    if (newValue !== oldValue) {
    } 
  }, true)
})