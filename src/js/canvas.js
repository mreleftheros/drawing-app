import ui from "./ui";

class Canvas {
  constructor() {
    this.brushes = [
      {name: "small", value: 5},
      {name: "medium", value: 10},
      {name: "large", value: 15},
    ];
    this.brush = this.brushes[1].value;
    this.color = "#000";
    this.coords;
    this.isDrawing = false;
  }
  init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");

    this.canvas.addEventListener("mousemove", e => this.updateCoords(e));
  }
  setBrush(size) {
    return this.brush = this.brushes.filter(brush => brush.name === size)[0].value;
  }
  setColor(color) {
    return this.color = color;
  }
  updateCoords(e) {
    return this.coords = {x: e.offsetX, y: e.offsetY};
  }
}

export default new Canvas();