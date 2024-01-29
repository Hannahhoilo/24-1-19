/* 
prototypes

is javascript there is a link between objects (all the values of type objects) called prototype 

reference = objects arrays functions 

primitive - strings number booleyans

const myObj = {name: 'Jane};
const numbers = [1,2,3]

*/
/*
all of these are prototypes:
const numbers = [1,2,3,4];
const user = {
	name: 'Alex'
}
function test (){

}

console.log(number);
console.log(user);
console.log();

what is the benefit of prototypes 
objects can inherit and acces and use properties and methods 
from one another through this prototype link (prototype chain)

all of these are prototypes:
const array = [1,2,3,4];
const myObj = {
	name: 'Alex'
}
function myFunction (){

}
console.log(myObj);


----------

they are all contructors:
Array
Object
Function

---------------------

Accessing the prototype
the __proto__ properrty of an object points to its prototype

console.log(myArray.__proto__);

console.log(Object.getPrototypeOf(myArray));

------

prototype inheritance


nå arver den ene propertiene fra den andre:
secondVehicle.__proto__=firstVehicle;


---


isPrototypeOf method
returns true or false a boolean

console.log(firstVehicle.isPrototypeOf(secondVehicle));

------

hasOwnProperty method
checs if a specific property exists in the specific 
objectit returns a boolean as the result of the evaluation

console.log(secondVehicle.hasOwnProperty('type'));
console.log(secondVehicle.hasOwnProperty('active'));

console.log(secondVehicle.active);


---
for loop for objects: for in
for off is for arrays.

for(let key in secondVehivle){
	console.log(key);
}


for(let key in secondVehivle){
	if(secondVehicle.hasOwnProperty(key)){
		console.log(key);
	}
}

-----------------


const name = 'James';

const num = 10;

console.log(typeof(name));


const secondName = new String('Alex');
console.log(typeof(secondName));


console.dir(name.__proto__);

constructors:
string
number
boolean

*/



let counter = 0;
 
const counterValue = document.getElementById('counter-value');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.querySelector('#reset');
 
// To increment the value of counter
incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});
 
// To decrement the value of counter
decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
});
 
// To reset the counter to zero
resetBtn.addEventListener('click', reset);
 
function reset() {
    counter = 0;
    counterValue.innerHTML = counter;
}


