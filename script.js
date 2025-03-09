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
let num1 = "empty";
let num2 = "empty";
let op = "empty";


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
// let one = document.querySelector("#one");
// let two = document.querySelector("#two");
// let three = document.querySelector("#three");
// let four = document.querySelector("#four");
// let five = document.querySelector("#five");
// let six = document.querySelector("#six");
// let seven = document.querySelector("#seven");
// let eight = document.querySelector("#eight");
// let nine = document.querySelector("#nine");
// let zero = document.querySelector("#zero");
// let decimal = document.querySelector("#decimal");
// let equal = document.querySelector("#equal");
// let tn = document.querySelector("#TN");
// let ac = document.querySelector("#AC");
// let del = document.querySelector("#del");
// let percent = document.querySelector("#percent");
// let plus = document.querySelector("#plus");
// let times = document.querySelector("#times");
// let minus = document.querySelector("#minus");
// let divideSign = document.querySelector("#divide");

function giveListener() {
    let buttons = Array.from(document.querySelectorAll("button"));
    //console.log(buttons);
    for (i=0; i<buttons.length; i++) {
        buttons[i].addEventListener("click", (e) => {
            //console.log(e.target.textContent);
            displayNum(e.target);
        })
    }
}

giveListener();

let disPanel;
let disNum;

function filterOp(content,...Args) {
    let arr = Array.from(content);
    console.log(arr)
    for (arg of Args) {
        for (i=0 ; i < arr.length; i++) {
            console.log(arr[i])
            console.log(arg)
            if(arr[i] === arg) {
                arr.splice(i,1)
                let disp = arr.join("")
                disPanel.textContent = disp;

                i--
            }
        }
    }
   
}

function displayNum(target) {
    disPanel = document.querySelector('#input');
    //console.log(disPanel);
    //console.log(parseInt(target.textContent));
    if (!isNaN(parseInt(target.textContent))) {
        if (disPanel.textContent.length < 10) {
            disPanel.textContent += target.textContent
            if(disPanel.textContent.length == 2) {
                filterOp(disPanel.textContent,"+","-","*","÷")
            };
            handler(target.textContent)};
    } else if (target.textContent == "+"
        || target.textContent == "-"
        || target.textContent == "*"
        || target.textContent == "÷") {
            disNum = disPanel.textContent;
            disPanel.textContent = target.textContent
            handler(target.textContent);
        } else {
        switch (target.textContent) {
            case "%":
                console.log(target.textContent);
                break;
            
            case "AC":
                console.log(target.textContent);
                disPanel.textContent = ""
                num1 = num2 = op = "empty"
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

//handler will take the number from the listener, 
//find out if it is num1, num2 or operator
//toss them to appropriate vars, num1,num2,op and call
//operate, storing it into a result var 
function handler(symbol) {
    //console.log(symbol);
    if (!isNaN(parseInt(symbol))) {//its a no.
        console.log(num1);
    } else if (isNaN(parseInt(symbol))) {//its a op
        console.log(symbol);
        switch (symbol) {
            case "+":
                op = "add";
                console.log(op);
                if (num1 === "empty") {
                    num1 = disNum;
                    console.log(num1);
                } else if (num2 === "empty") {

                } else {
                    console.log("broke at seconds");
                }
        }
    } else {
        console.log("handler broke");
    }
};



//note: should not eval more than a single pair of no at a time
//round answers with long decimals
// blaj baj