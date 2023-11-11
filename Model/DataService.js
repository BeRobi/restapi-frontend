export default class DataService {
  constructor() {
    console.log("Data Service");
  }
  getData(vegpont, callback) {
    axios
      .get(vegpont)
      .then(function (response) {
        // handle success
        console.log(response);
        console.log(response.data);
        console.log(response.data.irok);
        callback(response.data.irok);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  postDate() {}

  putData() {}

  deleteData() {}
}
