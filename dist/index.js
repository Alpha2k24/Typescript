"use strict";
let age = 5;
const firstName = "Felipe";
const isV = true;
let idk = 5;
const ids = [1, 2, 3, 4, 5];
//tupla
const person = [1, "Gaspar"];
const people = [
    [1, "Gaspar"],
    [2, "Sibo"]
];
//Intersections
const productId = "0";
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Down;
// Type Assertions
const productName = "Boné";
//let itemId = productName as string
let itemId = productName;
console.log(direction);
