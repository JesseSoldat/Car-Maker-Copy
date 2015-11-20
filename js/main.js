import angular from 'angular';

import './app-core/index';
import './app-layout/index';
import './app-cars/index';
import './app-user/index';


angular
  .module('app', ['app.core', 'app.layout', 'app.cars', 'app.user'])

;  
