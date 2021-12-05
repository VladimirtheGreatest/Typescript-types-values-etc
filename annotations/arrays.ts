const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];
const carsByMake = [
    ['f150'],
    ['corolla'],
    ['camaro']
];

const list = [];

const profileO = {
    name: 'Alex',
    age: 20,
    coords: {
        lat: 0,
        lng:15
    }
};

list.push(profileO);



const carsByMakeEmpty: string[][] = [];


//help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

//prevent incompatible values
//carMakers.push(100);

//help with map
carMakers.map((car: string):string => {
    return car.toLowerCase();
});


var result = list.filter(person =>
     ({ value: person.name, text: person.age }));


     //flexible types

const flexibleDates = [new Date(), '2030-10-10'];   
