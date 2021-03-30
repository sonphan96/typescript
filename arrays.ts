const carMakers: string[] = ['ford', 'toyota', 'chevy'];

const date = [new Date(), new Date()];

const carsByMake: string[][] = [];

const car = carMakers[0];
const myCar = carMakers.pop();

carMakers.map((car: string):string => {
  return car;
});

// Flexible types

const importantDates: (Date | string)[] = [];

importantDates.push('2030-10-10');
importantDates.push(new Date());