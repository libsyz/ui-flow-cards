// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus"
import { toggle } from './../articles/article_utils.js'

export default class extends Controller {
  static targets = [ "main", "label", "screen" ]
  static classes = [ "wireframe" ]
  active = false;

  connect() {
    this.mainTarget.classList.add(this.wireframeClass);
  }

  toggle() {
    toggle(this);
    this.toggleScreen();
  }

  toggleScreen() {
    if (this.screenTarget.classList.contains('bg-primary')) {
      this.screenTarget.classList.remove('bg-primary');
      this.screenTarget.classList.add('bg-fancy-mobile')
    } else {
      this.screenTarget.classList.add('bg-primary');
      this.screenTarget.classList.remove('bg-fancy-mobile')
    }
  }

}
