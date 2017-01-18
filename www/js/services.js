angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])
.service('BlankService', [function(){

}])


.service('login', [function($scope, $stateParams){

    var loginData = [];

    var log = {

        getUser:function(){
            return loginData;
        },

       addUser:function(usuario,mail,senha){
            loginData.push({
                user:usuario,
                email:mail,
                password:senha
            });
        }
    };

}]);
