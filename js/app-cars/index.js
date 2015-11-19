import angular from 'angular';
import '../app-core/index';

import CarsController from './controllers/cars.controller';
import CarsAddController from './controllers/cars-add.controller';
import CarSingleController from './controllers/car-single.controller';

import CarService from './services/car.service';

import jesseCar from './directives/car.directive';


angular
  .module('app.cars', ['app.core'])
  .controller('CarsController', CarsController)
  .controller('CarsAddController', CarsAddController)
  .controller('CarSingleController', CarSingleController)
  .service('CarService', CarService)
  .directive('jesseCar', jesseCar)
;