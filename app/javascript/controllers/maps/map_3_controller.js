import { Controller } from "stimulus";
import { toggle, drawMap } from './map_utils.js';

export default class extends Controller {
  static targets = [ "main", "label", "map", "mapWireframe" ]
  static classes = [ "wireframe" ]
  active = false;
  mapDrawn = false;

  connect() {
    this.mainTarget.classList.add(this.wireframeClass);
  }

  toggle() {
    toggle(this);
    if (this.mapDrawn == false) {
      drawMap(this);
    }
  }


  toggleIcons() {
    const icons = this.mainTarget.querySelectorAll('.fas');
    icons.forEach((icon) => {
      if (this.active == true) {
        icon.classList.remove('d-none');
      } else {
        icon.classList.add('d-none');
      }
    })
  }
}
