'use strict';

const { readFileSync } = require('fs');
const readlineSync = require('readline-sync');

// Calculates quadratic equation
const calculate = (a, b, c) => {
  const discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0) return console.log('There are 0 roots');
  const x1 = (-b - Math.sqrt(discriminant)) / (a * 2);
  const x2 = (-b + Math.sqrt(discriminant)) / (a * 2);
  const message = !discriminant
    ? `There is 1 root\nx1 = ${x1}`
    : `There are 2 roots\nx1 = ${x1}\nx2 = ${x2}`;
  return console.log(message);
};
