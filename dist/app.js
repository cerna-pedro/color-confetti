let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');
let bunch = [];
let confettiNumber = 25;
let colorOfYear = {
  "2010:" '#4AB4A8',
  "2011": '#D85171',
  "2012": '#E64C30',
  "2013": '#008865',
  "2014": '#AD5D98',
  "2015": '#945253',
  "2016a": '#FCD4D4',
  "2016b": '#99ACD7',
  "2017": '#84B03E',
  "2018": '#5F4A8B',
  "2019": '#FF7062',
  "2020": '#0f4c81'
}

class Confetti {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = (Math.random() + 0.5) * 10;
    this.gravity = (Math.random() + 0.5) * 10;
    this.rotation = (Math.PI *2)* Math.random();
    this.rotationSpeed = (Math.PI *2)* Math.random();
  }
}

function fall() {
requestAnimationFrame(fall)
}

fall();