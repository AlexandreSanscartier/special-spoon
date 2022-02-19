import IVec from './interfaces/IVec';
import IVec2D from './interfaces/IVec2D';
import Vec2D from './Vec2D';

export { IVec, IVec2D, Vec2D };

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
