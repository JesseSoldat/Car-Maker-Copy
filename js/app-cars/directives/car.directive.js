let jesseCar = function($state, CarService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      car: '='
    },
    template: `
        <div class='panel'>
          <h5>{{car.name}}</h5>
          <p ng-show="car.fuzzydice">Has fuzzydice</p>
          <p>{{car.year}} {{car.make}} {{car.model}}</p>
        </div>


    `,
    controller: 'CarsController as vm',

    link: function(scope, element, attrs) {

  }

  }

 

};

jesseCar.$inject = ['$state', 'CarService'];

export default jesseCar;