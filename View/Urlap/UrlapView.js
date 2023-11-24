import { adatLeiro } from "../adatLeiro.js";

export default class UrlapView {
  #obj = {};
  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.szuloElem = szuloElem;
    //this.formElem = $(".urlap");
    this.gombElem = $("button");

    //létrehozok egy form taget a szulőelemben
    //létrehozok egy kapaszkodót formelemhez this.formElem
    this.htmlOsszerak();
  }
  htmlOsszerak() {
    /*  végigmegyek az adatLeiro kulcsain és létrehozom az egyes 
        beviteli mezőket
         <div class="mb-3 mt-3">
            <label for="text" class="form-label">fdgdf</label>
            <input type="text" class="form-control" id="fds" placeholder="Enter email" name="email">
        </div>
        */

    let txt = "<form><div class=row>";
    for (const key in this.#obj) {
      txt += `<div class="col-md-2"><input type="text" class="form-control" placeholder="${this.#obj[key]}">
      </div>`
    }
    txt += `<div class="col-md-2"><button type="submit" class="btn btn-primary mb-2">Submit</button></form></div></div>`;
    console.log(txt);
    this.szuloElem.append(txt);
    
  }
}
