"use strict";// treat all js code as newer version
// alert(3+3);  will not work in nodejs but will run in browser
let name = "alok" //string 
let age = 21 // number

let isallowed = true //bool
let num = null

/* data types
1.number 
2. bigint 
3. string 
4 . boolean
5. null standalone type h 
undefined -- value is not assigned 
symbol => uniqueness k liye 
 */

// object 
//console.log(typeof num) //object
//console.log(typeof undefined);//undefined 
let x;       // Now x is undefined
x = 5;       // Now x is a Number
//console.log(x);
x = "John";
//console.log( typeof x); 
let score = "33"
let number = Number(score);
//console.log(number);
// "33" => 33
//"33abc" => NaN(not a number)
// true => 1 , false =>0
//null => 0
// undefined => NaN

let istrue = null;
let itistrue = Boolean(istrue);
console.log(itistrue);

// 1 => true , 0 => false 
// "" => false // "abc" => true 
//null => false
