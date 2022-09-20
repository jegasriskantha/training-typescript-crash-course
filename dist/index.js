"use strict";
// Basic Types in TypeScript
// number type
let id = 5;
// string type
let company = "IPG Automotive";
// boolean type
let isPublished = true;
// any type
let x = "Hello";
// Array where all elements are of type number
let ids = [1, 2, 3, 4, 5];
// Array where elements are any type
let arr = [1, true, "Hello"];
// Tuple
let person = [1, "Brad", true];
// Tuple Array
let employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
];
// Union
// this allows pid to be a number or a string
let pid = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
console.log(Direction1.Up); // 1
console.log(Direction2.Up); // Up
