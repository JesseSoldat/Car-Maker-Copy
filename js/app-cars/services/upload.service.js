let UploadService = function($http, FILESERVER) {
  
  this.upload = upload;

  function upload(file) {
    console.log(file);
    let formData = new FormData();
    formData.append('upload', file);

    return $http.post(FILESERVER.URL, formData, FILESERVER.CONFIG);
  }

};

UploadService.$inject = ['$http', 'FILESERVER'];

export default UploadService;