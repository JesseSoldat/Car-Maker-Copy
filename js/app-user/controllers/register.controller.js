let RegisterController = function() {
  
  let vm = this;

  vm.register = register;

  function register(userobj){
    console.log(userobj);
  }
  

};

RegisterController.$inject = [];

export default RegisterController;