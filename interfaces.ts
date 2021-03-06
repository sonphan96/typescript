interface Reportable {
  summary(): string; 
}

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `Color: ${this.color}`;
  }
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary());

}