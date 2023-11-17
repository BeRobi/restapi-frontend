import { adatLeiro } from "../adatLeiro.js";

export default class UrlapView {
  #obj = {};
  constructor(obj, szuloElem) {
    this.#obj = obj;
    this.szuloElem = szuloElem;

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

    /*      let txt = "<form class=`form`>";
    for (const key in this.#obj) {
      txt += `<label for="fname">${this.#obj[key]}:</label><br>
      <input type="text" id="fname" name="fname"><br>`
    }
    txt += "</form>";
    console.log(txt);
    this.szuloElem.append(txt); */

    /*     let txt = "<form class=`form-inline`>";
    for (const key in this.#obj) {
      txt += `
      <label class="sr-only" for="${this.#obj[key]}">Name</label>
      <input type="text" class="form-control mb-2 mr-sm-2" id="${this.#obj[key]}" placeholder="${this.#obj[key]}">
    `;
    }
    txt += "</form>";
    console.log(txt);
    this.szuloElem.append(txt);
  } */

    let txt = "<form class=`form-inline`>";
    for (const key in this.#obj) {
      txt += `<label class="sr-only" for="inlineFormInputGroup${
        this.#obj[key]
      }"></label>
  <div class="col-2">
    <div class="input-group-prepend"></div>
    <input type="text" class="form-control" id="inlineFormInputGroup${
      this.#obj[key]
    }" placeholder="${this.#obj[key]}"></div>`;
    }

    txt += `<button type="submit" class="btn btn-primary mb-2">Submit</button></form>`;
    console.log(txt);
    this.szuloElem.append(txt);
  }
}
