
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
