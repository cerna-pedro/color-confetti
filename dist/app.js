let canvas = document.querySelector("canvas");
let paragraph = document.querySelector("#for-2016");
let button = document.querySelector("#button");
function resizeCanvas() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
}
window.addEventListener("DOMContentLoaded", resizeCanvas);
window.addEventListener("resize", resizeCanvas);
let ctx = canvas.getContext("2d");
let bunch = [];
let confettiNumber = 40;
let colorOfYear = [
  {
    year: 2010,
    color: "#4AB4A8"
  },
  { year: 2011, color: "#D85171" },
  { year: 2012, color: "#E64C30" },
  { year: 2013, color: "#008865" },
  { year: 2014, color: "#AD5D98" },
  { year: 2015, color: "#945253" },
  { year: 2016, color: "#FCD4D4" },
  { year: 2016, color: "#99ACD7" },
  { year: 2017, color: "#84B03E" },
  { year: 2018, color: "#5F4A8B" },
  { year: 2019, color: "#FF7062" },
  { year: 2020, color: "#0f4c81" }
];
function colorIterator(data) {
  let nextIndex = 0;
  return {
    next: function() {
      return nextIndex < data.length
        ? { value: data[nextIndex++], done: false }
        : { done: true };
    }
  };
}
const yearColor = colorIterator(colorOfYear);
let confettiColor = "";
function nextColor() {
  const current = yearColor.next().value;
  confettiColor = current.color;
  setTimeout(() => {
    button.innerText = current.year;
  }, 1000);
}
console.log(confettiColor);
nextColor();

button.addEventListener("click", nextColor);

class Confetti {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = (Math.random() + 0.5) * 10;
    this.gravity = (Math.random() + 0.5) * 10;
    this.rotation = Math.PI * 2 * Math.random();
    this.rotationSpeed = Math.PI * 2 * Math.random();
    this.color = colorPicker();
  }
}

// function update() {
//   requestAnimationFrame(update);
// }
// function draw() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   bunch.forEach(function(c) {
//     ctx.save();
//     ctx.fillStyle = c.color;
//     ctx.translate(c.x + c.size / 2, c.y + c.size / 2);
//     ctx.rotate(c.rotation);
//     ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size);
//   });
// }
// if (bunch.length < confettiNumber) {
//   bunch.push(new Confetti(Math.random() * canvas.width, 0));
// }
// update();
