let UserService = function(PARSE, $http, $state, $cookies) {
  
  this.checkAuth = checkAuth;

  function checkAuth() {
    // console.log('checkAuth');
  }

};

UserService.$inject = ['PARSE', '$http', '$state', '$cookies'];

export default UserService;