let addImage = function(CarService, UploadService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      car: '='
    },
    templateUrl: 'templates/app-cars/upload.tpl.html',
    link: function(scope, element, attrs) {

    }
  }

};

addImage.$inject = ['CarService', 'UploadService'];

export default addImage;