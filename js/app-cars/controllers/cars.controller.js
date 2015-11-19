let CarsController = function(CarService) {

  let vm = this;

  activate();

  function activate() {
    CarService.getAllCars().then( (res) => {
      vm.cars = res.data.results;
    });
  }

  
  
  

};

CarsController.$inject = ['CarService'];

export default CarsController;