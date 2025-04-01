"use strict"; // treat all JS code as nwer version

//alert("Hello World"); // we are using nodejs, not browser

console.log(3+3)  
console.log("3+3") // 3+3

 // number => to power 53
// BigInt =>
// string => "hello world" 
// boolean => true/false
// null => empty value or standalone value
// undefined => variable not defined or initialized
// symbol => unique value
// object => complex data type 
// let => block scope
// const => block scope, cannot be changed
// var => function scope, can be changed
// let and const are block scoped, var is function scoped
// let and const are not hoisted, var is hoisted    

console.log(typeof 3) // number
console.log(typeof 3.14) // number
console.log(typeof 3n) // bigint;
console.log(typeof "hello") // string
console.log(typeof true) // boolean
console.log(typeof null) // object
console.log(typeof undefined) // undefined
console.log(typeof Symbol("hello")) // symbol
console.log(typeof {name: "John", age: 30}) // object
console.log(typeof [1, 2, 3]) // object
console.log(typeof function() {}) // function
console.log(typeof new Date()) // object
console.log(typeof new RegExp("hello")) // object
console.log(typeof new Map()) // object
console.log(typeof new Set()) // object
console.log(typeof new WeakMap()) // object
console.log(typeof new WeakSet()) // object
console.log(typeof new Array()) // object
console.log(typeof new Object()) // object
console.log(typeof new Error()) // object
//console.log(typeof new Promise()) // object
console.log(typeof new Proxy({}, {})) // object
console.log(typeof new Intl.DateTimeFormat()) // object
console.log(typeof new Intl.NumberFormat()) // object
console.log(typeof new Intl.PluralRules()) // object        



