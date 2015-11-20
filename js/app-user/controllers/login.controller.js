let loginController = function(UserService) {
  
  let vm = this;
  this.login = login;

  function login(userObj) {
    // console.log(userObj);
    UserService.login(userObj).then( (res) => {
      UserService.storeAuth(res.data);
    })
  }

};

loginController.$inject = ['UserService'];

export default loginController;