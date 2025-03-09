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

//create functions that populate display when you click digit buttons, AND store content of display into variable

//these are vars that reference the exact node of the button
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let nine = document.querySelector("#nine");
let zero = document.querySelector("#zero");
let decimal = document.querySelector("#decimal");
let equal = document.querySelector("#equal");
let tn = document.querySelector("#TN");
let ac = document.querySelector("#AC");
let del = document.querySelector("#del");
let percent = document.querySelector("#percent");
let plus = document.querySelector("#plus");
let times = document.querySelector("#times");
let minus = document.querySelector("#minus");
let divideSign = document.querySelector("#divide");

function giveListener() {
    let buttons = Array.from(document.querySelectorAll("button"));
    console.log(buttons);
    for (i=0; i<buttons.length; i++) {
        buttons[i].addEventListener("click", (e) => {
            //console.log(e.target.textContent);
            displayNum(e.target);
        })
    }
}

giveListener();

function displayNum(target) {
    let disPanel = document.querySelector('#input');
    //console.log(disPanel);
    console.log(parseInt(target.textContent));
    if (!isNaN(parseInt(target.textContent))
    || target.textContent == "+"
    || target.textContent == "-"
    || target.textContent == "*"
    || target.textContent == "÷") {
        disPanel.textContent = target.textContent
    } else {
        switch (target.textContent) {
            case "%":
                console.log(target.textContent);
                break;
            
            case "AC":
                console.log(target.textContent);
                break;
            
            case "Del":
                console.log(target.textContent);
                break;
            
            case "T/N":
                console.log(target.textContent);
                break;
            
            case ".":
                console.log(target.textContent);
                break;

            case "=":
                console.log(target.textContent);
                break;

            
        }
    }
    
}


//make it work, store no inputs and then operate() when user presses = button

//note: should not eval more than a single pair of no at a time
//round answers with long decimals
// blaj baj