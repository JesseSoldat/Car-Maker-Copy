let CarService = function($http, PARSE) {
  
  let url = PARSE.URL +'classes/car';

  

  this.getAllCars      = getAllCars;
  this.addCar          = addCar;
  this.getCar          = getCar;
  this.fuzzydice       = true;
  this.toggleFuzzy     = toggleFuzzy;


  function toggleFuzzy(carObj) {
    console.log(carObj);
    carObj.fuzzydice = carObj.fuzzydice ? false : true;
    return $http.put(url + '/' + carObj.objectId, carObj, PARSE.CONFIG);
  }
  //GET all cars
  function getAllCars() {
    return $http.get(url, PARSE.CONFIG);
  }

  //GET a single car
  function getCar(id) {
    return $http.get(url + '/' + id, PARSE.CONFIG);
  }

  //POST a car
  function Car(carObj) {
    this.make = carObj.make;
    this.model = carObj.model;
    this.year = Number(carObj.year);
    this.name = carObj.name;
    this.color = carObj.color;
    this.fuzzydice = false;
  }

  function addCar(carObj) {
    let c = new Car(carObj);

    return $http.post(url, c, PARSE.CONFIG);
  }
  

};

CarService.$inject = ['$http', 'PARSE'];

export default CarService;