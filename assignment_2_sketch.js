// greeting!
let name = prompt("hey! what is your name?");
alert("welcome. " + name + ", it's nice seeing you here.");
alert("let's do some math!");

let numInput = prompt("enter a value! any value:")
let num = Number(numInput)

alert("since you entered " + numInput + ", we'll use it in some simple math equations!")

//addition
let numAddinput = prompt("let's start with addition. enter a value to add to " + numInput );
let numAdd = Number(numAddinput)
let add = num + numAdd;
alert("If you add " + numAdd + " to " + num + ", you would get " + add)

//subtration
let numSubinput = prompt("now let's do subtraction! enter a value to subtract from " + numInput );
let numSub = Number(numSubinput)
let sub = num - numSub;
alert("If you subtract " + numSub + " from " + num + " ,you would get " + sub)

//multiplicaiton
alert("almost done! let's do one more.");
let multInput = prompt("let's end with multiplication. enter a value to multiply to " + numInput );
let numMult = Number(multInput)
let mult = num * numMult
alert("if you multiply " + numMult + " by " + num + ", you would get " + mult)

//closing
alert("okay that's enough math for today. thanks for stopping by!");
