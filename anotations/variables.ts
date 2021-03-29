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

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for(let i = 0; i < words.length; i++){
  if(words[i] === 'green') {
    foundWord = true;
  }
}

let numbers = [-10, -1, 12];
let numberAboutZero: boolean | number = false ;

for(let i = 0; i < numbers.length; i ++ ) {
  if(numbers[i] > 0) {
    numberAboutZero = 0;
  }
}
