// perform add, subtract, multiply and divde functions
const add = function(num1,num2) {
	return num1 + num2;
};

//console.log(add(1,1));

const subtract = function(num1,num2) {
	return num1 - num2;
};

const multiply = function(num1,num2) {
	return num1 * num2;
};

const divide = function(num1,num2) {
	return num1 / num2;
};

//create variables for no1, operator and no2
let num1 = 0;
let num2 = 0;
let op = 0;


//create function operate to take an oprator and 2 no and call
//one of the above respective functions

function operate(no1,no2,func) {
    //console.log(func);
    switch (func) {
        case "add": 
        return add(no1,no2);

        case "subtract": 
        return subtract(no1,no2);
        
        case "multiply": 
        return multiply(no1,no2);
        
        case "divide": 
        return divide(no1,no2);
        
        default:
            console.log("switch broke");
            break;
    }
}

console.log(operate(1,4,"multiply"));


//create basic html calcultor with buttons for each digit and oeprator, including =

//create functions that populate display when you click digit buttons, AND store content of display into variable

//make it work, store no inputs and then operate() when user presses = button

//note: should not eval more than a single pair of no at a time
//round answers with long decimals
// blaj baj