angular.module('chosen').controller("ChooseController", ['$scope', function($scope){
    $scope.choices = [];
    $scope.choice = -1;
    //

    $scope.removeItem = function(item)
    {
        console.log(item);
        var i = $scope.choices.indexOf(item);
        $scope.choices.splice(i, 1);
    }
    $scope.addItem = function(value) 
    {
        if (value)
        {
            $scope.choices.push($scope.optionInput);
            $scope.optionInput = "";
        }
    }
    $scope.chooseRandom = function() {
        console.log("Choosing Random");
        $scope.choice = Math.floor(Math.random() * $scope.choices.length);
    }
    $scope.resetApp = function() {
        $scope.choice = -1;
        $scope.choices = [];
    }
}]); 