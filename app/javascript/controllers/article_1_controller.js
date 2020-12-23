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
  static targets = [ "main", "label" ]
  static classes = [ "wireframe" ]
  active = false;

  connect() {
    this.mainTarget.classList.add(this.wireframeClass);
  }

  // Every article will have a common number of things to do:
  // Toggle the wireframe class
  // switch any images that are attached
  // That's going to be the case for most categories
  // make sense to have the same for all, and some special controllers for exceptions
  // 1. try to clean this, so we can do all the actions with values and css, so we only need to
  // store data in the html, and the code can be the same

  // 2. Try to inherit, so we can have a generic controller for everyone
  // StimulusController >  ArticlesController >  Article01Controller kind of thing
  // packs Stimulus        has all common logic  has the name to create the connection
  toggle() {
    if (this.active == false) {
      this.active = true;
      this.mainTarget.classList.remove('wireframe');
      this.showAllImages();
      this.labelTarget.innerText = "See Wireframe";
    } else {
      this.active = false;
      this.mainTarget.classList.add('wireframe');
      this.wireframeAllImages();
      this.labelTarget.innerText = "See Live"
    }
  }

  showAllImages() {
  const allImages = this.selectAllImages();
    allImages.forEach((img) => {
      img.src = require(`images/${img.dataset.asset}-show.png`)}
    )
  }

  wireframeAllImages() {
    const allImages = this.selectAllImages();
      allImages.forEach(img => img.src = require(`images/${img.dataset.asset}-wireframe.png`))
  }

  selectAllImages() {
    return this.mainTarget.querySelectorAll('img');
  }

}
