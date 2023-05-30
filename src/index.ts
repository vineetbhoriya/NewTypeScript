let id: number = 2;
// varible of number

let nm: string = "vineet";
// varible of string

let adds: number[] = [1, 2323, 2323, 212];
// array of numebr

// union
let className: number | string;
className = "12";
className = 12;
// enum
enum direction1 {
  Up = 1,
  down,
  left,
  right,
}
enum direction2 {
  Up = "up",
  down = "down",
  left = "left",
  right = "right",
}

// objects
type Obj = {
  id: number;
  name: string;
};
const obj: Obj = {
  id: 1,
  name: "abc",
};
// console.log("object id: ", obj.id);
// console.log("object name: ", obj.name);

function calculations(num1: number, num2: number): number {
  return num1 + num2;
}

// console.log("calculate", calculations(1,2))

// void function
function log(message: string | number): void {
  console.log("message: ", message);
}
log("hi");
// console.log(direction1.Up);
// console.log(direction1.right);
// console.log("name", nm);

function display<T>(item: T[]): any {
    console.log("item",item)
}

let a = display<number>([1]);
let b = display<string>(["namdfd"]);