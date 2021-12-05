//regular object
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};


//type alias
type Drink = [string, boolean, number];
//tuple we need to specify order
const pepsi: [string, boolean, number] = ['brown', true, 40];
//pepsi[0] = 40;   this is incorrect

const cocacola: Drink = ['brown', true, 50];


const carSpecs: [number, number] = [400, 3354];

const carStats = {
    horsePower: 400,
    weight: 3354
};