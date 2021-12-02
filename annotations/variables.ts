let apples = 5;
let speed: string = 'ddddd';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

//built in objects
let now: Date = new Date();


//function

const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

const json = '{"x": 10, "y": 20}';
const coordinates: {x:number; y:number} = JSON.parse(json);
console.log(coordinates);

//when we declare a variable on one line and initialize it later

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let index = 0; index < words.length; index++) {
    if (words[index] === 'green') {
        foundWord = true;
    }
}

//variables whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > 0) {
        numberAboveZero = numbers[index];
    }
}