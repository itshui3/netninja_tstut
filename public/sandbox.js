"use strict";
// fn signature:
// general structure of a fn: 
// what args it takes && what data it returns
// ex 1 [0:51]
// this variable is defined with a fn signature
// such that the variable in the future
// can hold a fn that follows this signature
let greet;
// a caveat with fn sigs is that typing parameters
// only defines the type they are required to be as
// not the name
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// ex 2 [3:03]
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// ex 3 [5:20]
// when we define obj vars, do we have to refer to it 
// on a high level like so? 
// seems like when I'm defining a fn signature
// defined object types need to be given a naming ref
// such as (obj: {name: string, age: number})
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
