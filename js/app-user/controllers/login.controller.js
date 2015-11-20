let loginController = function(UserService) {
  
  let vm = this;
  this.login = login;

  function login(userObj) {
    console.log(userObj);
  }

};

loginController.$inject = ['UserService'];

export default loginController;