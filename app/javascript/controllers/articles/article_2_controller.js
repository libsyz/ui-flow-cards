// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>
import { toggle } from "./article_utils.js"
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "main", "label" ]
  static classes = [ "wireframe" ]
  active = false;

  connect() {
    this.mainTarget.classList.add(this.wireframeClass);
  }

  toggle() {
    toggle(this);
  }

}
