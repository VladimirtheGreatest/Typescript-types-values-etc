interface Vehicle {
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true,
    summary(): string	{
        return `Name: ${this.name}`;
    }
};


const drinkO = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar}`;
    }
};



const printVehicle = 
(vehicle: Vehicle): void => {
    console.log(vehicle.summary());
};

printVehicle(oldCivic);
printVehicle(drinkO);

