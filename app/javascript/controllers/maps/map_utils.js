 import mapboxgl from 'mapbox-gl';

 const drawMap = (controller) => {
   mapboxgl.accessToken = 'pk.eyJ1IjoibGlic3l6IiwiYSI6ImNrajVwcHBqNTA1bzcyeXA1eGQwb2pxdGcifQ.asgTo8KQ1d8SrnT_y9LrFQ'
      const map = new mapboxgl.Map({
        container: `map-${controllerNumber(controller)}`,
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [ 103.830802, 1.305694 ],
        zoom: 12
       });

      new mapboxgl.Marker()
        .setLngLat([ 103.830802, 1.305694 ])
        .addTo(map);

      controller.mapDrawn = true;
 }

  const controllerNumber = (controller) => {
    return controller.element.dataset.controller.substr(-1);
  }

  const toggle = (controller) => {

    if (controller.active == false) {
      controller.active = true;
      controller.mainTarget.classList.remove('wireframe');
      hideMapWireframe(controller);
      showMap(controller);
      controller.labelTarget.innerText = "See Wireframe";
    } else {
      controller.active = false;
      controller.mainTarget.classList.add('wireframe');
      showMapWireframe(controller);
      hideMap(controller);
      controller.labelTarget.innerText = "See Live"
    }
  }

  const showMapWireframe = (controller) => {
    controller.mapWireframeTarget.classList.remove('d-none');
  }

  const hideMapWireframe = (controller) => {
    controller.mapWireframeTarget.classList.add('d-none');
  }

  const showMap = (controller) => {
    controller.mapTarget.classList.remove('d-none');
  }

  const hideMap = (controller) => {
    controller.mapTarget.classList.add('d-none');
  }



  export { toggle, drawMap }
