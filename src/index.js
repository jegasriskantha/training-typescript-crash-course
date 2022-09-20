// Basic Types in TypeScript
// number type
var id = 5;
// string type
var company = "IPG Automotive";
// boolean type
var isPublished = true;
// any type
var x = "Hello";
// Array where all elements are of type number
var ids = [1, 2, 3, 4, 5];
// Array where elements are any type
var arr = [1, true, "Hello"];
// Tuple
var person = [1, "Brad", true];
// Tuple Array
var employee;
employee = [
    [1, "Brad"],
    [2, "John"],
    [3, "Jill"],
];
// Union
// this allows pid to be a number or a string
var pid = 22;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up); // 0
