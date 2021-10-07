import canvas from "./canvas";

class Ui {
  constructor() {
    this.toggleBtn = document.getElementById("toggleBtn");
    this.toolbox = document.getElementById("toolbox");
    this.brushes = document.getElementById("brushes");
    this.swatches = document.getElementById("swatches");
    this.btns = document.getElementById("btns");
    this.resetBtn = document.getElementById("resetBtn");
  }
  init() {
    this.toggleBtn.addEventListener("click", e => this.toggleToolbox(e));
    this.brushes.addEventListener("click", e => this.selectBrush(e));
    this.swatches.addEventListener("click", e => this.selectSwatch(e));
    this.resetBtn.addEventListener("click", () => canvas.clearCanvas());
  }
  toggleToolbox(e) {
    e.target.firstElementChild.classList.toggle("enabled");
    this.toolbox.classList.toggle("active");
  }
  selectBrush(e) {
    if (e.target.tagName !== "BUTTON" || e.target.classList.contains("active")) return; // check
    
    let size = e.target.getAttribute("data-size");
    
    for (let brush of this.brushes.children) {
      brush.classList.remove("active");
    }
    
    e.target.classList.add("active");

    return canvas.setBrush(size);
  }
  selectSwatch(e) {
    if (e.target.tagName !== "BUTTON" || e.target.classList.contains("active")) return; // check

    let color = e.target.style.backgroundColor;

    for (let swatch of this.swatches.children) {
      swatch.classList.remove("active");
    }

    e.target.classList.add("active");

    return canvas.setColor(color);
  }
}

export default new Ui();