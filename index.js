'use strict';

const { readFileSync } = require('fs');
const readlineSync = require('readline-sync');

// Calculates quadratic equation
const calculate = (a, b, c) => {
  if (a === 0) return console.log('Error. Coefficient "a" can not be zero..');
  const discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0) return console.log('There are 0 roots');
  const x1 = (-b - Math.sqrt(discriminant)) / (a * 2);
  const x2 = (-b + Math.sqrt(discriminant)) / (a * 2);
  const message =
    discriminant === 0
      ? `There is 1 root\nx1 = ${x1}`
      : `There are 2 roots\nx1 = ${x1}\nx2 = ${x2}`;
  return console.log(message);
};

// Catches invalid input
const catchInvalid = (input) => {
  const parsed = parseFloat(input); // removes \n \r under the hood
  if (!Number.isNaN(parsed)) return parsed;
  console.log(`Error. Expected a valid real number, got ${input} instead`);
  return catchInvalid(question('a = '));
};

// Wraps native function in error catcher
const validatify = (fn) => (message) => catchInvalid(fn(message));
const question = validatify(readlineSync.question);
let a, b, c;

const param = process.argv[2];
if (param) {
  try {
    const data = readFileSync(param, 'utf-8');
    let coefficients = data.split(' ');
    coefficients = coefficients.map((coeff) => catchInvalid(coeff));
    [a, b, c] = coefficients;
  } catch (error) {
    console.log('Invalid path or such file does not exist..');
    process.exit(1);
  }
} else {
  a = question('a = ');
  b = question('b = ');
  c = question('c = ');
}

console.log(`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);
calculate(a, b, c);
