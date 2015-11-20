let UserService = function(PARSE, $http, $state, $cookies) {
  
  this.register  = register;
  this.login     = login;
  this.storeAuth = storeAuth;
  this.checkAuth = checkAuth;

  function register(userObj) {
   return $http.post(PARSE.URL + 'users', userObj, PARSE.CONFIG);

  }
 

  function login(userObj) {
    return $http.get(PARSE.URL + 'login', {
      headers: PARSE.CONFIG.headers,
      params: userObj
    });
  }

  function storeAuth(user) {
    $cookies.put('car-tracker-auth', user.sessionToken);
    $cookies.put('car-tracker-user', user.objectId);
    setHeaders(user.sessionToken);

    $state.go('root.home');
  }

  function checkAuth() {
    // console.log('checkAuth');
    let check = $cookies.get('car-tracker-auth');
    if(check) {
      setHeaders(check);
    } else {
      $state.go('root.login');
    }
  }

   function setHeaders(token) {
    PARSE.CONFIG.headers['X-Parse-Session-Token'] = token;
  }

};

UserService.$inject = ['PARSE', '$http', '$state', '$cookies'];

export default UserService;