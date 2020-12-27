// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

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

  drawMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibGlic3l6IiwiYSI6ImNrajVwcHBqNTA1bzcyeXA1eGQwb2pxdGcifQ.asgTo8KQ1d8SrnT_y9LrFQ'

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [ 103.830802, 1.305694 ],
      zoom: 12
     });

    new mapboxgl.Marker()
      .setLngLat([ 103.830802, 1.305694 ])
      .addTo(map);
  }

}
