angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])
.service('BlankService', [function(){

}])


.service('login', [function(){
    
    var loginData = [];
    
    var log = {
    
        getUser:function(){
            
            return loginData;
            
        },
        
        addUser:function(user,email,password){
            loginData.push(
                {
                    user:user,
                    email:email,
                    password:password
                }
            );
        }
    };
}]);