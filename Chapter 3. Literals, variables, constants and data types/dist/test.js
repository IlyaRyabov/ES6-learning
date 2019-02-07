'use strict'; // Numbers

var small = Number.EPSILON;
var bigInt = Number.MAX_SAFE_INTEGER;
var max = Number.MAX_VALUE;
var minInt = Number.MIN_SAFE_INTEGER;
var min = Number.MIN_VALUE;
var nInf = Number.NEGATIVE_INFINITY;
var nan = Number.NaN;
var inf = Number.POSITIVE_INFINITY;
console.log('========== NUMBERS ==========\n' + 'The smallest value that can be added to 1 to get a different number than it is bigger than 1 => ' + small + '\n' + 'Highest valid integer => ' + bigInt + '\n' + 'Maximum allowable number => ' + max + '\n' + 'Smallest valid integer => ' + minInt + '\n' + 'Lowest allowed number => ' + min + '\n' + 'Same as -Infinity => ' + nInf + '\n' + 'Same as NaN => ' + nan + '\n' + 'Same as Infinity => ' + inf); // Escaping special characters

var dialog1 = "He looked up and said \"don't do that!\" to Max.";
var dialog2 = 'He looked up and said "don\'t do that!" to Max.';
var s = "In JavaScript, use \\ as an escape character in strings.";
console.log('========== ESCAPING SPECIAL CHARACTERS ==========\n' + dialog1 + '\n' + dialog2 + '\n' + s); // Template string

var currentTemp = 19.5;
var message = "The current temperature is ".concat(currentTemp, "\xB0C");
console.log('========== TEMPLATE STRING ==========\n' + message); // Objects

console.log('========== OBJECTS ==========');
var obj = {};
obj.size; // undefined object

obj.color = "yellow";
obj["not an identifier"] = 3;
var SIZE = Symbol();
obj[SIZE] = 8;
console.log(obj);
var ilya1 = {
  name: 'Ilya',
  age: 4
};
var ilya2 = {
  name: 'Ilya',
  age: 4
};
var ilya3 = {
  name: 'Ilya',
  hobbies: {
    sport: 'hockey',
    job: 'programmer'
  }
};
console.log(ilya1, ilya2, ilya3);
var veriable1 = ilya3.hobbies.sport;
var veriable2 = ilya3.hobbies['sport'];
var veriable3 = ilya3['hobbies'].sport;
var veriable4 = ilya3['hobbies']['sport'];
console.log('First veriable => ' + veriable1 + '\n' + 'Second veriable => ' + veriable2 + '\n' + 'Third veriable => ' + veriable3 + '\n' + 'Fourth veriable => ' + veriable4);

ilya3.speak = function () {
  return "Hello world!";
};

console.log(ilya3.speak());
var deleteHobbies = delete ilya3.hobbies;
var deleteFunction = delete ilya3.speak;
console.log(deleteHobbies, deleteFunction); // Arrays

console.log('========== ARRAYS ==========');
var a1 = [1, 2, 3, 4];
var a2 = [1, 'two', 3, null];
var a3 = ["Hello, my name is Ilya Ryabov", "All my time i'm learn JavaScript", "Also i'm playing hockey", "I like what i do"];
var a4 = [{
  name: 'Ilya',
  age: '24'
}, {
  name: 'Alina',
  age: '23'
}];
var a5 = [[1, 2, 3, 4], [1, 2, 3, 4]];
console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
var arr = ['a', 'b', 'c'];
var arrLength = arr.length; // 3

var arrShow = arr[0]; // 'a'

var arrShowLast = arr[arr.length - 1]; // 'c'

console.log(arrLength, arrShow, arrShowLast);
var arr2 = [1, 2, 'c', 4, 5];
arr2[2] = 3; // change third element

console.log(arr2); // Dates

console.log('========== DATES ==========');
var now = new Date();
console.log(now);
var halloween = new Date(2016, 9, 31);
console.log(halloween);
var halloweenParty = new Date(2016, 9, 31, 19, 0);
console.log(halloweenParty);
var year = halloweenParty.getFullYear();
var month = halloweenParty.getMonth();
var date = halloweenParty.getDate();
var day = halloweenParty.getDay();
var hours = halloweenParty.getHours();
var minutes = halloweenParty.getMinutes();
var seconds = halloweenParty.getSeconds();
var milliseconds = halloweenParty.getMilliseconds();
console.log(year, month, date, day, hours, minutes, seconds, milliseconds);