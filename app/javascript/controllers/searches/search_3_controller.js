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
  static targets = [ "main", "label" ]
  static classes = [ "wireframe" ]
  active = false;

  connect() {
    this.mainTarget.classList.add(this.wireframeClass);
  }

  toggle() {
    this.mainTarget.classList.toggle(this.wireframeClass);
    this.mainTarget.querySelectorAll('.search-wireframe').forEach((img) => {
      img.classList.toggle('d-none');
    })
    this.mainTarget.querySelectorAll('.card').forEach((card) => {
      card.classList.toggle('d-none');
    })
  }
}
