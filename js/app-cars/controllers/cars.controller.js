let CarsController = function(CarService) {

  let vm = this;

  vm.clicked = clicked;

  activate();

  function activate() {
    CarService.getAllCars().then( (res) => {
      vm.cars = res.data.results;
    });
  }

  function clicked(car) {
    // console.log('clicked', car.name);
    // console.log(car);

  }
  
  

};

CarsController.$inject = ['CarService'];

export default CarsController;