'use strict';

// Numbers
const small = Number.EPSILON;
const bigInt = Number.MAX_SAFE_INTEGER;
const max = Number.MAX_VALUE;
const minInt = Number.MIN_SAFE_INTEGER;
const min = Number.MIN_VALUE;
const nInf = Number.NEGATIVE_INFINITY;
const nan = Number.NaN;
const inf = Number.POSITIVE_INFINITY;

console.log('========== NUMBERS ==========\n' +
            'The smallest value that can be added to 1 to get a different number than it is bigger than 1 => ' + small + '\n' +
            'Highest valid integer => ' + bigInt + '\n' +
            'Maximum allowable number => ' + max + '\n' +
            'Smallest valid integer => ' + minInt + '\n' +
            'Lowest allowed number => ' + min + '\n' +
            'Same as -Infinity => ' + nInf + '\n' +
            'Same as NaN => ' + nan + '\n' +
            'Same as Infinity => ' + inf);

// Escaping special characters
const dialog1 = "He looked up and said \"don't do that!\" to Max.";
const dialog2 = 'He looked up and said "don\'t do that!" to Max.';
const s = "In JavaScript, use \\ as an escape character in strings.";

console.log('========== ESCAPING SPECIAL CHARACTERS ==========\n' +
             dialog1 + '\n' +
             dialog2 + '\n' + s);

// Template string
let currentTemp = 19.5;
const message = `The current temperature is ${currentTemp}\u00b0C`;

console.log('========== TEMPLATE STRING ==========\n' + message);

// Objects
console.log('========== OBJECTS ==========');
const obj = {};
obj.size; // undefined object
obj.color = "yellow";

obj["not an identifier"] = 3;

const SIZE = Symbol();
obj[SIZE] = 8;

console.log(obj);

const ilya1 = {
    name: 'Ilya',
    age: 4,
};
const ilya2 = {name: 'Ilya', age: 4};
const ilya3 = {
    name: 'Ilya',
    hobbies : {
        sport: 'hockey',
        job: 'programmer',
    }
};

console.log(ilya1,ilya2,ilya3);

const veriable1 = ilya3.hobbies.sport;
const veriable2 = ilya3.hobbies['sport'];
const veriable3 = ilya3['hobbies'].sport;
const veriable4 = ilya3['hobbies']['sport'];

console.log('First veriable => ' + veriable1 + '\n' +
            'Second veriable => ' + veriable2 + '\n' +
            'Third veriable => ' + veriable3 + '\n' +
            'Fourth veriable => ' + veriable4);

ilya3.speak = function () {
    return "Hello world!"
};
console.log(ilya3.speak());

const deleteHobbies = delete ilya3.hobbies;
const deleteFunction = delete ilya3.speak;
console.log(deleteHobbies,deleteFunction);

// Arrays
console.log('========== ARRAYS ==========');
const a1 = [1, 2, 3, 4];
const a2 = [1, 'two', 3, null];
const a3 = [
    "Hello, my name is Ilya Ryabov",
    "All my time i'm learn JavaScript",
    "Also i'm playing hockey",
    "I like what i do"
];
const a4 = [
    {name: 'Ilya', age: '24'},
    {name: 'Alina', age: '23'},
];
const a5 = [
    [1,2,3,4],
    [1,2,3,4],
];

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);

const arr = ['a','b', 'c'];
const arrLength = arr.length; // 3
const arrShow = arr[0]; // 'a'
const arrShowLast = arr[arr.length - 1]; // 'c'

console.log(arrLength, arrShow, arrShowLast);

const arr2 = [1, 2, 'c', 4, 5];
arr2[2] = 3; // change third element

console.log(arr2);

// Dates
console.log('========== DATES ==========');

const now = new Date();
console.log(now);

const halloween = new Date(2016, 9, 31);
console.log(halloween);

const halloweenParty = new Date(2016, 9, 31, 19, 0);
console.log(halloweenParty);

const year = halloweenParty.getFullYear();
const month = halloweenParty.getMonth();
const date = halloweenParty.getDate();
const day = halloweenParty.getDay();
const hours = halloweenParty.getHours();
const minutes = halloweenParty.getMinutes();
const seconds = halloweenParty.getSeconds();
const milliseconds = halloweenParty.getMilliseconds();

console.log(year,month,date,day,hours,minutes,seconds,milliseconds);