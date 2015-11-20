let config = function($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })
    .state('root.home', {
      url: '/',
      controller: 'HomeController as vm',
      templateUrl: 'templates/app-layout/home.tpl.html'
    })
     .state('root.register', {
      url: '/register',
      controller: 'RegisterController as vm',
      templateUrl: 'templates/app-user/register.tpl.html'
    })
    .state('root.login', {
      url: '/login',
      controller: 'LoginController as vm',
      templateUrl: 'templates/app-user/login.tpl.html'
    })
    .state('root.cars', {
      url: '/cars',
      controller: 'CarsController as vm',
      templateUrl: 'templates/app-cars/cars.tpl.html'
    })
    .state('root.addCar', {
      url: '/cars/add',
      controller: 'CarsAddController as vm',
      templateUrl: 'templates/app-cars/cars-add.tpl.html'
    })
    .state('root.singleCar', {
      url: '/cars/:id',
      controller: 'CarSingleController as vm',
      templateUrl: 'templates/app-cars/car-single.tpl.html'
    })
   
  ;
  

};

config.$inject = ['$urlRouterProvider', '$stateProvider'];

export default config;