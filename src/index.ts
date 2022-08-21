import IVec from './interfaces/IVec';
import IMat from './interfaces/IMat';
import IMat3D from './interfaces/IMat3D';
import IVec2D from './interfaces/IVec2D';
import IVec3D from './interfaces/IVec3D';
import Vec2D from './Vec2D';
import Mat3D from './Mat3D';
import Matrix from './Matrix';

export { IVec, IVec2D, IVec3D, Vec2D, IMat, IMat3D, Matrix, Mat3D };

const canvas = document.getElementById('display-canvas') as HTMLCanvasElement;
canvas.width = 300;
canvas.height = 300;
const context = canvas.getContext('2d');

let rectWidth = Math.round(Math.random() * (canvas.width - 100)) + 50;
let rectHeight = Math.round(Math.random() * (canvas.height - 100)) + 50;

let middleMouseX = -1;
let middleMouseY = -1;

const redVectorDisplay = document.getElementById('red-vector');
const whiteVectorDisplay = document.getElementById('white-vector');

whiteVectorDisplay.innerText = `White Vector: ${new Vec2D(
  rectWidth,
  rectHeight
).toString()}`;

const drawFunc = function draw() {
  context.fillStyle = '#000000';
  context.fillRect(0, 0, canvas.width, canvas.height);

  drawArrow(
    new Vec2D(canvas.width / 2, canvas.height / 2),
    new Vec2D(rectWidth, rectHeight),
    '#FFF'
  );

  if (middleMouseX !== -1 && middleMouseY !== -1) {
    drawArrow(
      new Vec2D(middleMouseX, middleMouseY),
      new Vec2D(canvas.width / 2, canvas.height / 2),
      '#FF0000'
    );
    drawArrow(
      new Vec2D(middleMouseX, middleMouseY),
      new Vec2D(rectWidth, rectHeight),
      '#00FF00'
    );
  }

  window.requestAnimationFrame(drawFunc);
};

function drawArrow(startPoint: IVec2D, endPoint: IVec2D, strokeColor: string) {
  context.strokeStyle = strokeColor;

  const fromx = startPoint.x;
  const tox = endPoint.x;
  const fromy = startPoint.y;
  const toy = endPoint.y;

  const headlen = 10; // length of head in pixels
  const dx = tox - fromx;
  const dy = toy - fromy;
  const angle = Math.atan2(dy, dx);
  context.beginPath();

  context.moveTo(fromx, fromy);
  context.lineTo(tox, toy);
  context.lineTo(
    tox - headlen * Math.cos(angle - Math.PI / 6),
    toy - headlen * Math.sin(angle - Math.PI / 6)
  );
  context.moveTo(tox, toy);
  context.lineTo(
    tox - headlen * Math.cos(angle + Math.PI / 6),
    toy - headlen * Math.sin(angle + Math.PI / 6)
  );

  context.stroke();
  context.closePath();
}

canvas.addEventListener('mousedown', (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  if (e.button === 0) {
    rectHeight = y;
    rectWidth = x;
    whiteVectorDisplay.innerText = `White vector: ${new Vec2D(
      rectWidth,
      rectHeight
    ).toString()}`;
  } else if (e.button === 1) {
    middleMouseX = x;
    middleMouseY = y;
    redVectorDisplay.innerText = `Red vector: ${new Vec2D(
      rectWidth,
      rectHeight
    ).toString()}`;
  }
});

window.requestAnimationFrame(drawFunc);

/*
var max_i = 10000;
var max_j = 1000;

var startTime = performance.now();
for (let i = 1; i < max_i; i++) {
  for (let j = 1; j < max_j; j++) {
    var vec2d = new Vec2D(i, j);
    var normalizedVector = vec2d.normalize();
    //console.log(vec2d.toString());
    //console.log(
    //  `magnitude: ${normalizedVector.magnitude()} ${normalizedVector.toString()}`
    /);
  }
}
var endTime = performance.now();
var myScriptTime = endTime - startTime;

startTime = performance.now();
for (let i = 1; i < max_i; i++) {
  for (let j = 1; j < max_j; j++) {
    var normalizedVec2dgl = glMatrix.vec2.create();
    var vec2dgl = glMatrix.vec2.create();
    vec2dgl[0] = i;
    vec2dgl[1] = j;
    glMatrix.vec2.normalize(normalizedVec2dgl, vec2dgl);
    var maggl = Math.sqrt(glMatrix.vec2.squaredLength(normalizedVec2dgl));
    //console.log(`magnitude: ${maggl} ${glMatrix.vec2.str(normalizedVec2dgl)}`);
  }
}
endTime = performance.now();
var glScriptTime = endTime - startTime;

console.log(`My Scripts took ${myScriptTime}`);
console.log(`GL-Matrix Scripts took ${glScriptTime}`);

if (myScriptTime > glScriptTime) {
  const result = Math.round(100 - (glScriptTime / myScriptTime) * 100);
  console.log('glScriptTime is faster than MyScript by ' + result + '%');
}

if (glScriptTime > myScriptTime) {
  const result = Math.round(100 - (myScriptTime / glScriptTime) * 100);
  console.log('MyScript is faster than glScriptTime by ' + result + '%');
}
*/
