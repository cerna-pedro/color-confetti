let canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
function resizeCanvas() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
}
window.addEventListener("resize", resizeCanvas);
let ctx = canvas.getContext("2d");
let bunch = [];
let confettiNumber = 800;
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
let confettiColor;
function nextColor() {
  const current = yearColor.next();

  const currentValue = current.value;

  if (currentValue === undefined) {
    window.location.reload();
  }
  document.querySelector("#for-year").innerText = `
  That was ${currentValue.year}
  Tap the screen to continue`;
  currentValue.year === 2016
    ? (document.querySelector("#for-year").innerText = `
  That was part of ${currentValue.year}
  ${currentValue.year} had 2 Colors!
  Tap the screen to continue`)
    : `
  That was ${currentValue.year}
  Tap the screen to continue`;
  currentValue.year === 2020
    ? (document.querySelector("#for-year").innerText = `
  That was ${currentValue.year}
  Tap the screen to start all over again`)
    : `
  That was ${currentValue.year}
  Tap the screen to continue`;

  confettiColor = currentValue.color;
  class Confetti {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 25;
      this.gravity = Math.random() + 0.3;
      this.rotation = Math.PI * 2 * Math.random() * 0.0001;
      this.rotationSpeed = Math.PI * 2 * Math.random() * 0.001;
      this.color = confettiColor;
    }
  }
  while (bunch.length < confettiNumber) {
    bunch.push(new Confetti(Math.random() * canvas.width, -200));
  }
  update();
  drawConfetti();
}

document.addEventListener("click", nextColor);

let lastUpdateTime = Date.now();
function update() {
  let now = Date.now();

  let dt = now - lastUpdateTime;
  for (let i = bunch.length - 1; i >= 0; i--) {
    let c = bunch[i];

    if (c.y > canvas.height) {
      bunch.splice(i, 1);
      continue;
    }
    c.y += c.gravity * dt;
    c.rotation += c.rotationSpeed * dt;
  }
  lastUpdateTime = now;
  setTimeout(update, 1);
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bunch.forEach(c => {
    ctx.save();
    ctx.fillStyle = c.color;
    ctx.translate(c.x + c.size / 2, c.y + c.size / 2);
    ctx.rotate(c.rotation);
    ctx.fillRect(-c.size / 2, -c.size / 2, c.size, c.size);
    ctx.restore();
  });
  requestAnimationFrame(drawConfetti);
}

nextColor();
