import UrlapView from "../Urlap/UrlapView.js";
import { adatLeiro } from "../adatLeiro.js";
import FejlecView from "./FejlecView.js";
import SorView from "./SorView.js";



export default class TablaView {
  #list = [];
  constructor(list, szuloElem) {
    this.#list = list;
    console.log(this.#list);
    szuloElem.append(`<table class='table table-striped'>
        <thead></thead>
        <tbody></tbody>
        </table>`);
    this.tbodyElem = szuloElem.find("tbody");
    this.theadElem = szuloElem.find("thead");
    this.formElem = $(".urlap");
    this.gombElem = $("button")
   

    console.log(this.formElem)

    console.log(this.tbodyElem);
    //new UrlapView(adatLeiro, this.formElem);
    new FejlecView(adatLeiro, this.theadElem);
   
    this.sorMegjelenit();
  }
  sorMegjelenit() {
    // itt példányosítjuk a sort, annyiszor, ahány eleme van
    this.#list.forEach((elem, index) => {
      new SorView(index, elem, this.tbodyElem);
    
      index++;
    });
  }
}
