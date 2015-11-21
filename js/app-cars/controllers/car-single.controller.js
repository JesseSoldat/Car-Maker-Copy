let CarSingleController = function(CarService, $stateParams, MainService) {

  let vm = this;

  vm.showImageUpload     = false;
  vm.showMainFormNow     = false;

  vm.showMainForm        = showMainForm;
  vm.addMain             = addMain;

  vm.showForm            = showForm;
  vm.uploadImage         = uploadImage;

  activate();

  function activate() {
    CarService.getCar($stateParams.id).then( (res) => {
      // console.log(res);
      vm.car = res.data;

    })
  }
  function addMain(mainObj, car) {
    MainService.attachMain(mainObj, car).then( (res) => {
      console.log(res);
    });
  }

  function showMainForm() {
    vm.showMainFormNow = (vm.showMainFormNow) ? false : true;
  }

  function showForm() {
    // console.log('showForm');
    vm.showImageUpload = (vm.showImageUpload) ? false : true;

  }
  function uploadImage(data) {

  }
  

};

CarSingleController.$inject = ['CarService', '$stateParams', 'MainService'];

export default CarSingleController;