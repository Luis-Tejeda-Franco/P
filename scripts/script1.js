document.addEventListener("DOMContentLoaded", function () {
  const modelViewer = document.querySelector("model-viewer");
  const slides1 = document.querySelectorAll(".slide");

  // Función para cambiar el modelo 3D cuando se hace clic en un botón
  window.switchModel = (element, modelName) => {
    // Cambia el src del modelo 3D
    const modelPath = `../../assets/3d/${modelName}.glb`;
    modelViewer.src = modelPath;

    // Establece la clase 'selected' en el botón seleccionado y la elimina de los demás
    slides.forEach((slide) => {
      slide.classList.remove("selected");
    });
    element.classList.add("selected");
  };

  // Evita que los eventos del slider afecten la escena XR
  document.querySelector(".slider").addEventListener("beforexrselect", (ev) => {
    ev.preventDefault();
  });
});
