  const toggle = (controller) => {

    if (controller.active == false) {
      controller.active = true;
      controller.mainTarget.classList.remove('wireframe');
      showAllImages(controller);
      controller.labelTarget.innerText = "See Wireframe";
    } else {
      controller.active = false;
      controller.mainTarget.classList.add('wireframe');
      wireframeAllImages(controller);
      controller.labelTarget.innerText = "See Live"
    }
  }

  const showAllImages = (controller) => {
  const allImages = selectAllImages(controller);
    allImages.forEach((img) => {
      img.src = require(`./${img.dataset.asset}-show.png`)}
    )
  }

  const wireframeAllImages = (controller) => {
    const allImages = selectAllImages(controller);
      allImages.forEach(img => img.src = require(`./${img.dataset.asset}-wireframe.png`))
  }

  const selectAllImages = (controller) => {
    return controller.mainTarget.querySelectorAll('img');
  }

  export { toggle }
