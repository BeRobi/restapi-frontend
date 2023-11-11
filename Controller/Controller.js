import DataService from "../Model/DataService.js";
import TablaView from "../View/TablaView.js";

export default class Controller {
  constructor() {
    this.dataService = new DataService();

    this.dataService.getData("adatok.json", this.megjelenit);
  }

  megjelenit(list) {
    console.log(list);
    //példányosítjuk a view-et
    new TablaView(list, $(".adatok"));
  }
}
