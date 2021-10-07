import ui from "./ui";

class Canvas {
  constructor() {
    this.brushes = [
      {name: "small", value: 5},
      {name: "medium", value: 10},
      {name: "large", value: 15},
    ];
    this.brush = this.brushes[1].value;
  }
  init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");

    
  }
  setBrush(size) {
    return this.brush = this.brushes.filter(brush => brush.name === size)[0].value;
  }
}

export default new Canvas();