import { Controller } from "stimulus";
import mapboxgl from 'mapbox-gl';
import { toggle } from './map_utils.js';

export default class extends Controller {
  static targets = [ "main", "label", "map", "mapWireframe" ]
  static classes = [ "wireframe" ]
  active = false;
  mapDrawn = false;

  connect() {
    this.mainTarget.classList.add(this.wireframeClass);
    this.toggleIcons();

  }

  toggle() {
    toggle(this);
    this.toggleIcons();
    if (this.mapDrawn == false) {
      this.drawMap();
    }
  }

  drawMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibGlic3l6IiwiYSI6ImNrajVwcHBqNTA1bzcyeXA1eGQwb2pxdGcifQ.asgTo8KQ1d8SrnT_y9LrFQ'

    const map = new mapboxgl.Map({
      container: 'map-2',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [ 103.830802, 1.305694 ],
      zoom: 12
     });

    new mapboxgl.Marker()
      .setLngLat([ 103.830802, 1.305694 ])
      .addTo(map);

    this.mapDrawn = true;
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
