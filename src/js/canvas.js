import ui from "./ui";

class Canvas {
  constructor() {
    this.brushes = [
      {name: "small", value: 5},
      {name: "medium", value: 10},
      {name: "large", value: 15},
    ];
    this.brush = this.brushes[1].value;
    this.size = "medium";
    this.color = "black";
    this.isDrawing = false;
  }
  init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");

    this.canvas.addEventListener("mousemove", e => this.updatePoint(e));
    this.canvas.addEventListener("mousedown", e => this.updatePoint(e));
    this.canvas.addEventListener("mouseup", e => this.updatePoint(e));
  }
  setBrush(size) {
    this.size = size;
    this.brush = this.brushes.filter(brush => brush.name === size)[0].value;
    
    return this.updateCursor();
  }
  setColor(color) {
    this.color = color;
    
    return this.updateCursor();
  }
  updateCursor() {
    this.canvas.style.cursor = `url(./assets/brush-${this.size}-${this.color}.png) 5 5, auto`;
    this.canvas.style.caretColor = this.color;
  }
  updateCoords(e) {
    return this.coords = {x: e.offsetX, y: e.offsetY};
  }
  updatePoint(e) {
    console.log(e.offsetX, e.offsetY)
    if (e.type === "mousedown") {
      this.isDrawing = true;
    } else if (e.type === "mouseup") {
      this.isDrawing = false;
    }

    if (this.isDrawing) {
      return this.draw(e);
    } else {
      return this.ctx.beginPath();
    }
  }
  draw(e) {
    this.ctx.lineTo(e.offsetX, e.offsetY);
    this.ctx.strokeStyle = this.color;
    this.ctx.lineWidth = this.brush;
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(e.offsetX, e.offsetY);
  }
  clearCanvas(e) {
    return this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

export default new Canvas();