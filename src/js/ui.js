class Ui {
  constructor() {
    this.toggleBtn = document.getElementById("toggleBtn");
    this.toolbox = document.getElementById("toolbox");
  }
  init() {
    this.toggleBtn.addEventListener("click", e => this.toggleToolbox(e));
  }
  toggleToolbox(e) {
    e.target.firstElementChild.classList.toggle("enabled");
    this.toolbox.classList.toggle("active");
  }
}

export default new Ui();