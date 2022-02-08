# Quadratic Equation Solver ඞ

This is CLI for quick solving quadratic equations

## Installation

This project uses NodeJS under the hood. Install using the following command:

First, clone this repository

```
$ git clone https://github.com/nikolaichub/quadratic-equation-solver.git
```

Then install all necessary dependencies

```
$ npm install
```

## Usage

### Interactive mode

For starting interactive mode, run this

```
$ npm start
```

### Non-interactive

For starting non-interactive mode you have to specify a file

```
$ npm start <name-of-file.txt>
```

## Examples

### Interactive mode

Just run application and CLI will ask for entering data

```
$ npm start

> a = 2
> b = 4
> c = 2
> Equation is: (2) x^2 + (4) x + (2) = 0
> There is 1 root
> x1 = -1
```

### Non-interactive mode

The tetx file should follow this schema

```
<Number: Coeff. A> <Number: Coeff. B> <Number: Coeff. C>
```

Something like this

```
2 1 -3
```

```
$ npm start test.txt

> Equation is: (2) x^2 + (1) x + (-3) = 0
> There are 2 roots
> x1 = -1.5
> x2 = 1
```
