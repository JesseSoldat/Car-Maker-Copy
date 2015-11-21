let jesseCar = function($state, CarService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      car: '='
    },
    template: `
        <div class='panel' ng-click="vm.clicked(car)">
          <h5>{{car.name}}</h5>
          <p ng-show="car.fuzzydice">Has fuzzydice</p>
          <p>{{car.year}} {{car.make}} {{car.model}}</p>
        </div>


    `,
    controller: 'CarsController as vm',

    link: function(scope, element, attrs) {
      // console.log(scope);
      // console.log(element);
      element.on('click', function() {
        $state.go('root.singleCar', {id: scope.car.objectId});
      });

  }

  }

 

};

jesseCar.$inject = ['$state', 'CarService'];

export default jesseCar;