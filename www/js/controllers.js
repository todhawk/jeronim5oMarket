angular.module('app.controllers', [])

.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {



}])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrl', ['$scope', '$stateParams', '$state', 'login', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, login) {
    $scope.login = function(user,password){
        //console.log("User: " + user + " Senha: " + password);
<<<<<<< HEAD
        if(user == "admin" && password == "admin"){
=======
        // if(user == userInfo.infoSignUp.userName && password == userInfo.infoSignUp.userMail){
        if (user == 'admin'&& password == 'admin') {
>>>>>>> 1e5706a230d7958b25cbcbfe560475db40f1eaa7
            //Redirecionar para a pagina Home
            //console.log("Login realizado com sucesso!!!");
            $scope.error = false;
            $state.go("menu.home");
        }else{
            $scope.error = true;
            //exibir mensagem de erro
            console.log("Username e/ou Password incorretos");
        }


    }







}])

.controller('signupCtrl', ['$scope', '$stateParams', '$state', 'login', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, login) {
    $scope.signup = function(name,email,password){
        login.addUser(name,email,password);
        $state.go("menu.home");
    }

}])

.controller('itemCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('carrinhoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  


}])

.controller('contatoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('profileCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('formCtrl', ['$scope', '$stateParams', 'userInfo', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, userInfo) {
  $scope.nome = userInfo.getUser();
  $scope.email = userInfo.getUser();
  $scope.senha = userInfo.getUser();
  $scope.cpf = userInfo.getUser();
  $scope.tel = userInfo.getUser();
  $scope.endereco = userInfo.getUser();
  $scope.cep = userInfo.getUser();

  $scope.enviarDadosCadastrais = function(nome,email,senha,cpf,tel,endereco,cep) {
    userInfo.addUser(nome,email,senha,cpf,tel,endereco,cep);
  }

}])
