const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const date = [new Date(), new Date()];

const carsByMake: string[][] = [];

const car = carMakers[0];
const myCar = carMakers.pop();

carMakers.map((car: string):string => {
  return car;
});