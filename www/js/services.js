angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])
.service('BlankService', [function(){

}])

.service('productStore', [function(){

    var allProducts = [
        {
            productId:0,
            productName:"Pen Drive 64GB - Kingston",
            productImage:"http://images.tcdn.com.br/img/img_prod/325348/pen_drive_64gb_kingston_dt101g2_64gb_3844_3_20150223115418.jpg",
            productPrice:58.90,
            productQut:55
        },
        {
            productId:1,
            productName:"Taco de Golf (ferro) - Excel",
            productImage:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT2A5GRrZtq3IWa3w_LzgB5_qvl040QFOkc_4j2jC7HpyygiaE&usqp=CAE",
            productPrice:337.40,
            productQut:230
        },
        {
            productId:2,
            productName:"Cookies Original - Bauduco",
            productImage:"http://www.cosmedamiaocomercio.com.br/site/uploads/produto/34f846082992704cedffa5561f041c71.png",
            productPrice:5.80,
            productQut:15
        },
        {
            productId:3,
            productName:"Arroz Integral Orgânico - Tio João",
            productImage:"http://www.paodeacucar.com/img/uploads/1/758/510758.jpg",
            productPrice:22.90,
            productQut:84
        }
        ];

        var productsFuncs = {

            getProduct:function(){
                console.log("Get Product");
                console.log(allProducts);
                return allProducts;
            }
        }
        return productsFuncs;
}])


.service('signUp', [function(){
  var allDataSignUp = [];
  var signUpFuncs = {

      getPerson:function(){
          // console.log("Get Product");
          // console.log(allDataSignUp);
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
