/* eslint-disable no-console */
const startTime = new Date();

const fs = require('fs');
const _ = require('lodash');

const input = fs
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(value => value.split(','));

let shortestDistance = Infinity;
let fewestSteps = Infinity;
const wire1 = [];
const wire2 = [];

const setupWireArray = (points, coordinates) => {
  const pos = { x: 0, y: 0 };
  const dirMap = { L: { x: -1, y: 0 }, R: { x: 1, y: 0 }, U: { x: 0, y: 1 }, D: { x: 0, y: -1 } };

  points.forEach(point => {
    let i;
    const dir = point[0];
    const dist = parseInt(point.substr(1), 10);
    const { x, y } = dirMap[dir];

    for (i = 0; i < dist; i += 1) {
      pos.x += x;
      pos.y += y;
      coordinates.push(`${pos.x},${pos.y}`);
    }
  });
};

setupWireArray(input[0], wire1);
setupWireArray(input[1], wire2);

// calculate the intersections using lodash
const intersections = _.intersection(wire1, wire2);

// calculate the Manhattan distance and fewest combined steps
intersections.forEach(point => {
  const [x, y] = point.split(',');
  shortestDistance = Math.min(shortestDistance, Math.abs(x) + Math.abs(y));
  fewestSteps = Math.min(fewestSteps, wire1.indexOf(point) + wire2.indexOf(point) + 2);
});

console.log(`Shortest Manhattan distance is ${shortestDistance}`);
console.log(`Fewest number of steps is ${fewestSteps}`);
console.log(`Total time to compute: ${new Date() - startTime}ms`);
