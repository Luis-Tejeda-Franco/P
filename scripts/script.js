// const buttonScreenHandler = () => {
//   // Confirma que se presiono sobre el Hotspot del objeto 3D
//   console.log("Presiono el botón de la pantalla");
//   // Carga y reproduce un audio
//   var audio = new Audio("../assets/aud/screen.opus");
//   audio.play();
//   // Navega hasta una sección especifica de la pagina
//   document.getElementById("section_two").scrollIntoView({ behavior: "smooth" });
// };

// document.getElementById("button-screen").onclick = buttonScreenHandler;

let audio; // Variable global para el objeto de audio

const buttonScreenHandler = () => {
  // Confirma que se presionó sobre el Hotspot del objeto 3D
  console.log("botón 0");

  // Si hay un audio en reproducción, detenlo antes de iniciar otro
  if (audio && !audio.paused) {
    audio.pause();
    audio.currentTime = 0; // Reinicia el audio al principio
  }

  // Crea y reproduce un nuevo audio
  audio = new Audio("../assets/aud/MODO-MONITOR.opus");
  audio.play();

  // Navega hasta una sección específica de la página
  //document.getElementById("section_two").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("button-screen").onclick = buttonScreenHandler;

const buttonScreenHandler1 = () => {
  // Confirma que se presionó sobre el Hotspot del objeto 3D
  console.log("botón 1");

  // Si hay un audio en reproducción, detenlo antes de iniciar otro
  if (audio && !audio.paused) {
    audio.pause();
    audio.currentTime = 0; // Reinicia el audio al principio
  }

  // Crea y reproduce un nuevo audio
  audio = new Audio(
    "../assets/aud/PARTE-POSTERIOR-BATERÍAS-Y-FUENTE-DE-ALIMENTACIÓN_.opus"
  );
  audio.play();

  // Navega hasta una sección específica de la página
  //document.getElementById("section_two").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("button-screen1").onclick = buttonScreenHandler1;

const buttonScreenHandler2 = () => {
  // Confirma que se presionó sobre el Hotspot del objeto 3D
  console.log("botón 2");

  // Si hay un audio en reproducción, detenlo antes de iniciar otro
  if (audio && !audio.paused) {
    audio.pause();
    audio.currentTime = 0; // Reinicia el audio al principio
  }

  // Crea y reproduce un nuevo audio
  audio = new Audio("../assets/aud/PARTE-FRONTAL-S-_MOD.-MARCAPASOS_.opus");
  audio.play();

  // Navega hasta una sección específica de la página
  document.getElementById("section_one").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("button-screen2").onclick = buttonScreenHandler2;

const buttonScreenHandler3 = () => {
  // Confirma que se presionó sobre el Hotspot del objeto 3D
  console.log("botón 3");

  // Si hay un audio en reproducción, detenlo antes de iniciar otro
  if (audio && !audio.paused) {
    audio.pause();
    audio.currentTime = 0; // Reinicia el audio al principio
  }

  // Crea y reproduce un nuevo audio
  audio = new Audio("../assets/aud/MOD.-DEA.opus");
  audio.play();

  // Navega hasta una sección específica de la página
  document.getElementById("section_two").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("button-screen3").onclick = buttonScreenHandler3;

const buttonScreenHandler4 = () => {
  // Confirma que se presionó sobre el Hotspot del objeto 3D
  console.log("botón 4");

  // Si hay un audio en reproducción, detenlo antes de iniciar otro
  if (audio && !audio.paused) {
    audio.pause();
    audio.currentTime = 0; // Reinicia el audio al principio
  }

  // Crea y reproduce un nuevo audio
  audio = new Audio("../assets/aud/9-BOTONES-FRONTALES.opus");
  audio.play();

  // Navega hasta una sección específica de la página
  document
    .getElementById("section_tres")
    .scrollIntoView({ behavior: "smooth" });
};

document.getElementById("button-screen4").onclick = buttonScreenHandler4;

const buttonScreenHandler5 = () => {
  // Confirma que se presionó sobre el Hotspot del objeto 3D
  console.log("botón 5");

  // Si hay un audio en reproducción, detenlo antes de iniciar otro
  if (audio && !audio.paused) {
    audio.pause();
    audio.currentTime = 0; // Reinicia el audio al principio
  }

  // Crea y reproduce un nuevo audio
  audio = new Audio("../assets/aud/3-BOTONES-FLECHA-HACIA-ARRIBA.opus");
  audio.play();

  // Navega hasta una sección específica de la página
  document
    .getElementById("section_cuatro")
    .scrollIntoView({ behavior: "smooth" });
};

document.getElementById("button-screen5").onclick = buttonScreenHandler5;

const buttonScreenHandler6 = () => {
  // Confirma que se presionó sobre el Hotspot del objeto 3D
  console.log("botón 6");

  // Si hay un audio en reproducción, detenlo antes de iniciar otro
  if (audio && !audio.paused) {
    audio.pause();
    audio.currentTime = 0; // Reinicia el audio al principio
  }

  // Crea y reproduce un nuevo audio
  audio = new Audio(
    "../assets/aud/PARTE-POSTERIOR-2-_CONEXION-EQUIPOTENCIAL_.opus"
  );
  audio.play();

  // Navega hasta una sección específica de la página
  //document.getElementById("section_two").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("button-screen6").onclick = buttonScreenHandler6;

const buttonScreenHandler7 = () => {
  // Confirma que se presionó sobre el Hotspot del objeto 3D
  console.log("botón 7");

  // Si hay un audio en reproducción, detenlo antes de iniciar otro
  if (audio && !audio.paused) {
    audio.pause();
    audio.currentTime = 0; // Reinicia el audio al principio
  }

  // Crea y reproduce un nuevo audio
  audio = new Audio("../assets/aud/PERILLA DE NAVEGACIÓN (ABAJO).opus");
  audio.play();

  // Navega hasta una sección específica de la página
  document
    .getElementById("section_cinco")
    .scrollIntoView({ behavior: "smooth" });
};

document.getElementById("button-screen7").onclick = buttonScreenHandler7;

const buttonScreenHandler8 = () => {
  // Confirma que se presionó sobre el Hotspot del objeto 3D
  console.log("botón 8");

  // Si hay un audio en reproducción, detenlo antes de iniciar otro
  if (audio && !audio.paused) {
    audio.pause();
    audio.currentTime = 0; // Reinicia el audio al principio
  }

  // Crea y reproduce un nuevo audio
  audio = new Audio("../assets/aud/parte-posterior-3-puerto-usb.opus");
  audio.play();

  // Navega hasta una sección específica de la página
  //document.getElementById("section_two").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("button-screen8").onclick = buttonScreenHandler8;

const buttonScreenHandler9 = () => {
  // Confirma que se presionó sobre el Hotspot del objeto 3D
  console.log("botón 9");

  // Si hay un audio en reproducción, detenlo antes de iniciar otro
  if (audio && !audio.paused) {
    audio.pause();
    audio.currentTime = 0; // Reinicia el audio al principio
  }

  // Crea y reproduce un nuevo audio
  audio = new Audio("../assets/aud/parte-posterior-4-puerto-red.opus");
  audio.play();

  // Navega hasta una sección específica de la página
  //document.getElementById("section_two").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("button-screen9").onclick = buttonScreenHandler9;

const buttonScreenHandler10 = () => {
  // Confirma que se presionó sobre el Hotspot del objeto 3D
  console.log("botón 10");

  // Si hay un audio en reproducción, detenlo antes de iniciar otro
  if (audio && !audio.paused) {
    audio.pause();
    audio.currentTime = 0; // Reinicia el audio al principio
  }

  // Crea y reproduce un nuevo audio
  audio = new Audio("../assets/aud/PARTE-POSTERIOR-5-_MULTIFUNCIONAL_.opus");
  audio.play();

  // Navega hasta una sección específica de la página
  //document.getElementById("section_two").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("button-screen10").onclick = buttonScreenHandler10;

const buttonScreenHandler11 = () => {
  // Confirma que se presionó sobre el Hotspot del objeto 3D
  console.log("botón 11");

  // Si hay un audio en reproducción, detenlo antes de iniciar otro
  if (audio && !audio.paused) {
    audio.pause();
    audio.currentTime = 0; // Reinicia el audio al principio
  }

  // Crea y reproduce un nuevo audio
  audio = new Audio("../assets/aud/parte-posterior-6-puerto-vga.opus");
  audio.play();

  // Navega hasta una sección específica de la página
  //document.getElementById("section_two").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("button-screen11").onclick = buttonScreenHandler11;

const buttonScreenHandler12 = () => {
  // Confirma que se presionó sobre el Hotspot del objeto 3D
  console.log("botón 12");

  // Si hay un audio en reproducción, detenlo antes de iniciar otro
  if (audio && !audio.paused) {
    audio.pause();
    audio.currentTime = 0; // Reinicia el audio al principio
  }

  // Crea y reproduce un nuevo audio
  audio = new Audio("../assets/aud/mod-desfibrilaci195147n-manual.opus");
  audio.play();

  // Navega hasta una sección específica de la página
  document
    .getElementById("section_seis")
    .scrollIntoView({ behavior: "smooth" });
};

document.getElementById("button-screen12").onclick = buttonScreenHandler12;

const buttonScreenHandler13 = () => {
  // Confirma que se presionó sobre el Hotspot del objeto 3D
  console.log("botón 13");

  // Si hay un audio en reproducción, detenlo antes de iniciar otro
  if (audio && !audio.paused) {
    audio.pause();
    audio.currentTime = 0; // Reinicia el audio al principio
  }

  // Crea y reproduce un nuevo audio
  audio = new Audio("../assets/aud/parte-lateral-derecha.opus");
  audio.play();

  // Navega hasta una sección específica de la página
  //document.getElementById("section_two").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("button-screen13").onclick = buttonScreenHandler13;

const buttonScreenHandler14 = () => {
  // Confirma que se presionó sobre el Hotspot del objeto 3D
  console.log("botón 14");

  // Si hay un audio en reproducción, detenlo antes de iniciar otro
  if (audio && !audio.paused) {
    audio.pause();
    audio.currentTime = 0; // Reinicia el audio al principio
  }

  // Crea y reproduce un nuevo audio
  audio = new Audio("../assets/aud/parte-lateral-izquierda.opus");
  audio.play();

  // Navega hasta una sección específica de la página
  //document.getElementById("section_two").scrollIntoView({ behavior: "smooth" });
};

document.getElementById("button-screen14").onclick = buttonScreenHandler14;
//
//
//
document.addEventListener("DOMContentLoaded", function () {
  const modelViewer = document.querySelector("model-viewer");
  const slides = document.querySelectorAll(".slide");

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
