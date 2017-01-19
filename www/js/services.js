angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])
.service('BlankService', [function(){

}])


.service('signUp', [function(){
  var allDataSignUp = [];
  var signUpFuncs = {

      getPerson:function(){
          console.log("Get Product");
          console.log(allDataSignUp);
          return allDataSignUp;
      },

      addPerson:function(name,email,password){
          allDataSignUp.push({
              nameClint:name,
              emailClient:email,
              passwordClient:password
          });
          alert("Cadastro realizado com sucesso!");
          console.log(allDataSignUp);
      }

  }
  return signUpFuncs;
}]);
