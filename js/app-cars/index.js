import angular from 'angular';
import '../app-core/index';

import CarsController from './controllers/cars.controller';
import CarsAddController from './controllers/cars-add.controller';
import CarSingleController from './controllers/car-single.controller';


angular
  .module('app.cars', ['app.core'])
  .controller('CarsController', CarsController)
  .controller('CarsAddController', CarsAddController)
  .controller('CarSingleController', CarSingleController)
;