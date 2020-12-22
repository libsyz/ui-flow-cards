// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "main" ]
  active = false;

  connect() {
    console.log("I am connected!");
  }

  toggle() {
    if (this.active == false) {
      this.active = true;
      this.mainTarget.classList.remove('wireframe');
      this.labelTarget.innerText = "See Wireframe";
    } else {
      this.active = false;
      this.mainTarget.classList.add('wireframe');
      this.labelTarget.innerText = "See Live"
    }
  }

}
