var app = angular.module("myShoppingList" , []);
app.controller("myCtrl", function($scope){
    $scope.products = ["Abd" , "Vinni" , "Chatur"];
    $scope.addItem = function(){
        $scope.errortext = "";
        if(!$scope.addMe){return;} // for empty entry
        if($scope.products.indexOf($scope.addMe) == -1){    // to check the element already exist or not?
            $scope.products.push($scope.addMe);
        } else {
            // $scope.errortext = "";
            $scope.errortext = $scope.addMe+" is already in your list!"
        }
        
    }
    $scope.removeItem = function(x){
        $scope.products.splice(x, 1);
    }
});