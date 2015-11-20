import angular from 'angular';

import LoginController from './controllers/login.controller';
import RegisterController from './controllers/register.controller';

import UserService from './services/user.service';

angular
  .module('app.user', ['app.core'])
  .controller('RegisterController', RegisterController)
  .controller('LoginController', LoginController)
  .service('UserService', UserService)
 ; 