angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('menu.signup', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/signup.html',
        controller: 'signupCtrl'
      }
    }
  })

  .state('item', {
    url: '/page6',
    templateUrl: 'templates/item.html',
    controller: 'itemCtrl'
  })

  .state('menu.carrinho', {
    url: '/page7',
    views: {
      'side-menu21': {
        templateUrl: 'templates/carrinho.html',
        controller: 'carrinhoCtrl'
      }
    }
  })

  .state('menu.contato', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contato.html',
        controller: 'contatoCtrl'
      }
    }
  })

  .state('profile', {
    url: '/page9',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  })

  .state('form', {
    url: '/page10',
    templateUrl: 'templates/form.html',
    controller: 'formCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});