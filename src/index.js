/* start print size on header */
const currentSizeEl = document.getElementById("currentSize");

const resetText = () => (currentSizeEl.innerText = "");
const addTextSizeEl = (text) => {
  console.log("text", text);
  resetText();
  currentSizeEl.innerText = text;
};

const calculateSize = (windowWidth) => {
  if (windowWidth > 0) {
    addTextSizeEl("xxs");
  }
  if (windowWidth >= 360) {
    addTextSizeEl("xs");
  }
  if (windowWidth >= 769) {
    addTextSizeEl("sm");
  }
  if (windowWidth >= 1088) {
    addTextSizeEl("md");
  }
  if (windowWidth >= 1280) {
    addTextSizeEl("lg");
  }
  if (windowWidth >= 1376) {
    addTextSizeEl("xl");
  }
  if (windowWidth >= 1664) {
    addTextSizeEl("xxl");
  }
};

window.addEventListener("resize", () => {
  const windowWidth = window.innerWidth;
  calculateSize(windowWidth);
});

(() => {
  calculateSize(window.innerWidth);
})();
/* end print size on header */
