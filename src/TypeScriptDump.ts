//import Stream from "ts-stream";

// a dump of value stuff and patterns and idiosyncrasies of TypeScript

console.log('Hello World! and so on');

// never define variables using var - causing scope-leaking
// constant
const s = "42";
// convert/parse/cast string to number
printNumber(Number(s));

printNumber(square(2));

const username1 = "Max";
const userid1 = 1;

class User {
    readonly username: string;
    readonly userid: number;

    constructor(username: string, userid: number) {
        this.username = username;
        this.userid = userid;
    }
}

let max = new User(username1, userid1);

let june = {
    username : "June",
    userid : 4
};

// readonly renders fields 'final'
// max.username = "try to change your name";

greetUser(max);
greetUser(june);

// ensure a certain type of variable is passed, always use lowercase for primitives
function printNumber(n: number) {
    console.log(n);
}

function square(n: number): number {
    return n * n;
}

function greetUser(user: User): void {
    console.log("Hello User '" + user.username + "', your id is: " + user.userid);
}

// arrays
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// tuples
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK

enum Color {Red, Green, Blue}
let c: Color = Color.Green;

function myFunction(value: string | number): string | number {
    if (typeof value === "string") {
        return value.concat("this is a string so I can use concat"); // It is a string
    } else {
        return value + 1; // We know its a number
    }
}

//Stream.from([1, 2, 3, 4])
//    .map((n) => n * 2)
//    .forEach((n) => console.log(n));

/*
 TypeScript keywords:
 - break

 - as - type assertion

 interface Foo {
    bar: number;
    bas: string;
 }
 var foo = {} as Foo;
 foo.bar = 123;
 foo.bas = 'hello';

 - any

 - switch

 - case

 - if

 - throw

 - else

 - var - do not use

 - number

 - string - can be used for templating by surrounding with `

 let fullName: string = `Bob Bobbington`;
 let age: number = 37;
 let sentence: string = `Hello, my name is ${ fullName }.

 I'll be ${ age + 1 } years old next month.`;

 # get

 # module

 - type - somewhat like Class<?>

 # instanceof

 # typeof

 public
 private

 - enum

 export
 finally
 for
 while

 - void

 - null

 super
 this
 new
 in
 return
 true
 false
 any
 extends
 static
 let
 package
 implements
 interface
 function
 new
 try
 yield
 const
 continue
 do
 catch
 */