import DataService from "../Model/DataService.js";
import TablaView from "../View/Tablazat/TablaView.js";
import UrlapView from "../View/Urlap/UrlapView.js";
import { adatLeiro } from "../View/adatLeiro.js";


export default class Controller {
  constructor(){
    this.dataService=new DataService()

    this.dataService.getData("adatok.json", this.megjelenit)
    $(window).on("sorTorles",(e)=>{
        console.log(e.detail)
        this.dataService.deleteData("adatok.json", e.detail)
    })
}


megjelenit(list){
   // console.log(list)
    //példányosítjuk a view-t Táblázatot
    new TablaView(list, $(".adatok"))
    new UrlapView(adatLeiro, $(".urlap"));
} 
}
