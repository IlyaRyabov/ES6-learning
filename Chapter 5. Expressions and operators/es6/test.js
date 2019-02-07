'use strict';

const x1 = 0, x2 = 3, x3 = -1.5, x4 = -6.33;
const p1 = -x1 * 1;
const p2 = +x2 * 2;
const p3 = +x3 * 3;
const p4 = -x4 * 4;

console.log(p1, p2, p3, p4);

let x = 2;
const r1 = x++ + x++;
const r2 = ++x + ++x;
const r3 = x++ + ++x;
const r4 = ++x + x++;
let y = 10;
const r5 = y-- + y--;
const r6 = --y + --y;
const r7 = y-- + --y;
const r8 = --y + y--;

console.log(r1, r2, r3, r4, r5, r6, r7, r8);

const n = 5;
const s = "5";
const result1 = n === s; // false
const result2 = n !== s; // true
const result3 = n === Number(s); // true
const result4 = n !== Number(s); // false
const result5 = n == s; // true (не ркомендуеться)
const result6 = n != s; // false (не рекомендуется)
const a = {name: "an object"};
const b = {name: "an object"};
const result7 = a === b; // false (потому что разные объекты)
const result8 = a !== b; // true
const result9 = a == b; // false (не рекомендуется)
const result10 = a != b; // true (не рекомендуется)

console.log(result1, result2, result3, result4, result5, result6, result7, result8, result9, result10);

const comparison1 = 3 > 5; // false
const comparison2 = 3 >= 5; // false
const comparison3 = 3 < 5; // true
const comparison4 = 3 <= 5; // true
const comparison5 = 5 > 5; // false
const comparison6 = 5 >= 5; // true
const comparison7 = 5 < 5; // false
const comparison8 = 5 <= 5; // true

console.log(comparison1, comparison2, comparison3, comparison4, comparison5, comparison6, comparison7, comparison8);

let num = 0;
while(true) {
    num += 0.1;
    if(Math.abs(num - 0.3) < Number.EPSILON) break;
}
console.log(`Stopped at ${num}`);




















