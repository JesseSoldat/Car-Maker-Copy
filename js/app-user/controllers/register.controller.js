let RegisterController = function(UserService) {
  
  let vm = this;

  vm.register = register;

  function register(user){
    // console.log(userobj);
    UserService.register(user).then( (res) => {
      UserService.storeAuth(res.data);
    });
  }
  

};

RegisterController.$inject = ['UserService'];

export default RegisterController;