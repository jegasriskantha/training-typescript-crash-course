// Basic Types in TypeScript

// number type
let id: number = 5;

// string type
let company: string = "IPG Automotive";

// boolean type
let isPublished: boolean = true;

// any type
let x: any = "Hello";

// Array where all elements are of type number
let ids: number[] = [1, 2, 3, 4, 5];

// Array where elements are any type
let arr: any[] = [1, true, "Hello"];

// Tuple
let person: [number, string, boolean] = [1, "Brad", true];

// Tuple Array
let employee: [number, string][];

employee = [
  [1, "Brad"],
  [2, "John"],
  [3, "Jill"],
];

// Union
// this allows pid to be a number or a string
let pid: string | number = 22;

// Enum
enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

// Objects
type User = {
  id: number;
  name: string;
};
const user: User = {
  id: 2,
  name: "John",
};

// Type Assertion
let cid: any = 1;

// these syntaxes are the same
// let customerId = <number>cid;
let customerId = cid as number;

// Functions
// x, y and the function return are all of type number
function addNum(x: number, y: number): number {
  return x + y;
}

// when the function returns nothing, use void
function log(message: string | number): void {
  console.log(message);
}

// Interfaces
// This is like a custom type that can be reused, it makes sense to use this when you have a complex object
// you can't use interfaces with primitives or unions
// here id is readonly, so it can't be changed
// here age is optional, so it doesn't have to be passed in
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

interface MathFunc {
  (x: number, y: number): number;
}

// two functions that use the MathFunc interface
const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

interface MathFunc {
  (x: number, y: number): number;
}

// Classes
// this is a class with a constructor
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const brad = new Person(1, "Brad");
const mike = new Person(2, "Mike");

// calls the register method on person class
console.log(brad.register());

// subclasses and inheritance
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Shawn", "Developer");

// Generics
// this allows you to create a place holder of the type that you want to use
// this is useful when you want to create a function that can work with different types
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(["brad", "john", "jill"]);
