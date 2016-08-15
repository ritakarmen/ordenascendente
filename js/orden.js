var app = angular.module('AppOrdenando',[]);

app.controller('OrdenandoCtrl', function($scope) {

//-------Declarando las variables----------
  $scope.ordenandoNumero = 1;
  $scope.numeroRepetido = true;
  $scope.recuerda = "";
  $scope.numeros = [];

//-------Creamos funcion para agreagr numero---------
  $scope.agregarNumero = function() {
    $scope.recuerda = "";
    if (NoEsNumeroRepetido($scope.ordenandoNumero)) {
      $scope.numeros.push($scope.ordenandoNumero);
      $scope.ordenandoNumero = 1;
    } 
      else {
      $scope.recuerda = "recuerda";
    }
  };
//-------Creamos funcion para ordenar numero---------
  $scope.ordenar = function() {
  //-------llamando al loop que pasara por cada numero-------------
    angular.forEach($scope.numeros, function(value, key) {
        console.log("posicion: " + key);
  //-------$scope.numeros[key].resaltar-------------
        buscar(key);
    });
  };

//-------creando la funcion recursiva para comparar los numeros entre si-------------
  function buscar(posicion) {
  	var num1 = $scope.numeros[posicion];
    var num2 = $scope.numeros[posicion - 1];
    if (num2 == null) {
    	return;
    }
    if (num1 < num2) {
      var temp = $scope.numeros[posicion - 1];
      $scope.numeros[posicion - 1] = $scope.numeros[posicion];
      $scope.numeros[posicion] = temp;
      return buscar(posicion - 1);
    } 
  };

//-------creando limpieza borrado de datos-------------
  $scope.reset = function() {
    $scope.numeros = [];
    $scope.ordenandoNumero = 1;
    $scope.numeroRepetido = false;
    $scope.recuerda = "";
  };
  
//------funcion de numeros no repetitivos---------------------
  function NoEsNumeroRepetido(value) {
    return $scope.numeros.indexOf(value) == -1;
  }

});
