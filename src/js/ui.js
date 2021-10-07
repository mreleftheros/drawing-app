import canvas from "./canvas";

class Ui {
  constructor() {
    this.toggleBtn = document.getElementById("toggleBtn");
    this.toolbox = document.getElementById("toolbox");
    this.brushes = document.getElementById("brushes");
    this.swatches = document.getElementById("swatches");
    this.btns = document.getElementById("btns");
  }
  init() {
    this.toggleBtn.addEventListener("click", e => this.toggleToolbox(e));
    this.brushes.addEventListener("click", e => this.selectBrush(e));
  }
  toggleToolbox(e) {
    e.target.firstElementChild.classList.toggle("enabled");
    this.toolbox.classList.toggle("active");
  }
  selectBrush(e) {
    if (e.target.tagName !== "BUTTON" || e.target.classList.contains("active")) return; // check
    
    let size = e.target.getAttribute("data-size");
    canvas.brushSize = size;

    for (let brush of this.brushes.children) {
      brush.classList.remove("active");
    }

    e.target.classList.add("active");
  }
}

export default new Ui();