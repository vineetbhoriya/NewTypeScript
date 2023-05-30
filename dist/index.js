"use strict";
let id = 2;
// varible of number
let nm = "vineet";
// varible of string
let adds = [1, 2323, 2323, 212];
// array of numebr
// union
let className;
className = "12";
className = 12;
// enum
var direction1;
(function (direction1) {
    direction1[direction1["Up"] = 1] = "Up";
    direction1[direction1["down"] = 2] = "down";
    direction1[direction1["left"] = 3] = "left";
    direction1[direction1["right"] = 4] = "right";
})(direction1 || (direction1 = {}));
var direction2;
(function (direction2) {
    direction2["Up"] = "up";
    direction2["down"] = "down";
    direction2["left"] = "left";
    direction2["right"] = "right";
})(direction2 || (direction2 = {}));
const obj = {
    id: 1,
    name: "abc",
};
// console.log("object id: ", obj.id);
// console.log("object name: ", obj.name);
function calculations(num1, num2) {
    return num1 + num2;
}
console.log("calculate", calculations(1, 2));
// console.log(direction1.Up);
// console.log(direction1.right);
// console.log("name", nm);
