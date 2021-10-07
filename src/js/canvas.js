class Canvas {
  constructor() {
    this.canvas;
    this.ctx;
    this.canvasWidth;
    this.canvasHeight;
  }
  init() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
  }
}