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



  export { toggle }
