// Visit The Stimulus Handbook for more details
// https://stimulusjs.org/handbook/introduction
//
// This example controller works with specially annotated HTML like:
//
// <div data-controller="hello">
//   <h1 data-target="hello.output"></h1>
// </div>

import { Controller } from "stimulus";
import mapboxgl from 'mapbox-gl';
import { toggle } from './map_utils.js';

export default class extends Controller {
  static targets = [ "main", "label", "map", "mapWireframe" ]
  static classes = [ "wireframe" ]
  active = false;

  connect() {
    this.mainTarget.classList.add(this.wireframeClass);
    this.drawMap();
  }

  toggle() {
    toggle(this);
  }

  drawMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibGlic3l6IiwiYSI6ImNqc3c2ejNkazAzYmg0M3BpYnpucGk0d2QifQ.-35Gavs7U2KoVJAXHDvHNA';
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
