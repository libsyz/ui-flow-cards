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
  static targets = [ "imageShow", "imageWireframe", "label", "header", "body", "button", "avatarWireframe", "avatarShow"  ]
  active = false;

  connect() {
    console.log("I am connected!");
  }

  toggle() {
    if (this.active == false) {
      this.active = true;
      this.imageWireframeTarget.classList.add('d-none');
      this.imageShowTarget.classList.remove('d-none');
      this.bodyTarget.classList.remove('wireframe');
      this.headerTarget.classList.remove('wireframe');
      this.avatarWireframeTarget.classList.add('d-none');
      this.avatarShowTarget.classList.remove('d-none');
      this.buttonTarget.classList.remove('wireframe');
      this.labelTarget.innerText = "See Wireframe";
    } else {
      this.active = false;
      this.imageWireframeTarget.classList.remove('d-none');
      this.imageShowTarget.classList.add('d-none');
      this.bodyTarget.classList.add('wireframe');
      this.headerTarget.classList.add('wireframe');
      this.avatarWireframeTarget.classList.remove('d-none');
      this.avatarShowTarget.classList.add('d-none');
      this.buttonTarget.classList.add('wireframe');
      this.labelTarget.innerText = "See Live"
    }
  }

}
