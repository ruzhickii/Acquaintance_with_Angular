angular.module("myApp",[])
    .controller("firstCtrl", function ($scope) {

        //Создать временную переменную
        $scope.tempInput = "тестовое задание";

        //Создать хранилище для всех заданий
        $scope.tasksArray = [];

        //Создать функцию, которая переносит из временного хранилищие задания
        $scope.addNew = function () {
            if($scope.tempInput){
                $scope.tasksArray.push($scope.tempInput);
                $scope.tempInput = "";
            } else {
                console.log("В инпуте пусто!");
                }
            };

        $scope.deleteItem = function (item) {
            var index =  $scope.tasksArray.indexOf(item);
            console.log(index);
            $scope.tasksArray.splice(index, 1);
        };
    });


