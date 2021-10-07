import ui from "./ui";
import canvas from "./canvas";

const init = () => {
  ui.init();
  canvas.init();
};

document.addEventListener("DOMContentLoaded", init);