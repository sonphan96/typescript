let apple: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1,2,3]

// Classes
class Car {

}

let car: Car = new Car();

// Object literal 
let point: { x: number; y: number } = {
  x: 10,
  y: 20
}

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//Annotation
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates);