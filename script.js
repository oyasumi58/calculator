// perform add, subtract, multiply and divde functions
const add = function(num1,num2) {
	if (isFloat(num1) || isFloat(num2)) {
        return (100000000 * num1 + 100000000 * num2) / 100000000
    }
    return num1 + num2;
};

//console.log(add(1,1));

const subtract = function(num1,num2) {
	if (isFloat(num1) || isFloat(num2)) {
        return (100000000 * num1 - 100000000 * num2) / 100000000
    }
    return num1 - num2;
};

const multiply = function(num1,num2) {
	if (isFloat(num1) || isFloat(num2)) {
        return (num1 * num2)
    }
    return num1 * num2;
};

console.log(multiply(10,0.5))

const divide = function(num1,num2) {
	if (isFloat(num1) || isFloat(num2)) {
        return (100000000 * num1 / 100000000 * num2) / 100000000
    }
    return num1 / num2;
};

//create variables for no1, operator and no2
let num1 = "empty";
let num2 = "empty";
let op = "empty";
let resultMode = false;
let lastDigit;

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

//console.log(operate(1,4,"multiply"));

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
    //console.log(arr)
    for (arg of Args) {
        for (i=0 ; i < arr.length; i++) {
            //console.log(arr[i])
            //console.log(arg)
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
        if (resultMode === false) {
            if (disPanel.textContent.length < 10) {
                disPanel.textContent += target.textContent
                if(disPanel.textContent.length == 2) {
                    filterOp(disPanel.textContent,"+","-","*","÷")
                };
                handler(target.textContent)};
        } else if (resultMode === true) {
            disPanel.textContent = "";  
            disPanel.textContent += target.textContent
            resultMode = false;
                if(disPanel.textContent.length == 2) {
                    filterOp(disPanel.textContent,"+","-","*","÷")
                } else {};
            //console.log(`${target.textContent} is text content`)
            handler(target.textContent)} else {
                console.log("broke in resultmode");
            }
        
       
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
            disPanel.textContent = "";
            num1 = num2 = op = "empty";
            resultMode = false;
            break;
            
            case "Del":
            if (resultMode === false) {
                let arr = Array.from(disPanel.textContent);
                let ret = arr.toSpliced(-1,1).join("");
                disPanel.textContent = ret;
            }

             console.log(target.textContent);
            break;
            
            case "T/N":
              
            console.log(target.textContent);
            break;
            
            case ".":
                if (resultMode === false && lastDigit ==="number") {
                    if (disPanel.textContent.length < 10) {
                     disPanel.textContent += target.textContent
                    }
                }
            console.log(target.textContent);
            break;

            case "=":
                filterOp(disPanel.textContent,"+","-","*","÷");
                // if (num1 === "empty") {
                //     console.log('num1 empty state');
                //     let num1 = disPanel.textContent;
                //     result = num1;
                //     disPanel.textContent = result;
                //     disNum = result;
                //     num1 = result;
                //     num2 = op = "empty"
                //     resultMode = true;
                // } else if (num2 === "empty") {
                //     console.log('num2 empty state');
                //     num2 = +disNum;
                //     console.log(`${num1},${num2},${op}`)
                //     let result = operate(num1,num2,op);
                //     disPanel.textContent = result;
                //     disNum = result;
                //     num2 = result;
                //     op = "empty"
                //     resultMode = true;
                // } else {
                //     console.log(num2);
                //     console.log(`${num1},${num2},${op}`)
                //     let result = operate(num1,num2,op);
                //     disPanel.textContent = result;
                //     disNum = result;
                //     num1 = num2 = op = "empty"
                //     resultMode = true;
                // }
                console.log(target.textContent);
                break;  
            
            default:
                console.log("switch broke");
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
        lastDigit = "number"
        console.log(`last digit is ${lastDigit}`)
    } else if (isNaN(parseInt(symbol))) {//its a op
        console.log(symbol);
        if (lastDigit === "number" && num1 === "empty") {
            num1 = +disNum;
            console.log(`${num1} stored in num1`);
           } else if (lastDigit ==="number" && num2 === "empty") {
               num2 = +disNum;
               console.log(`${num2} stored in num2`);
               console.log(`${num1},${num2},${op}`)
               let result = operate(num1,num2,op);
               isFloat(result) ? result = round9sf(result) : console.log("ahah");
               disPanel.textContent = result;
               disNum = result;
               num1 = result;
               num2 = op = "empty"
               resultMode = true;
           } else if (lastDigit ==="number" && num1 !=="empty" && num2 !=="empty") {
             console.log(`skibdii`);
           } else {
               console.log("broke at seconds");
           }
            lastDigit = "operator"
            console.log(`last digit is ${lastDigit}`)
        switch (symbol) {
            case "+":
                op = "add";
                break;

            case "-":
                op = "subtract";
                break;
                
            case "*":
                op = "multiply";
                break;
                
            case "÷":
                op = "divide";
                break;
            
            default:
                console.log("broke at op handler");
                break;
        }
    } else {
        console.log("handler broke");
    }
};


function isFloat(num) {
    if (num % 1 !==0) {
        return true;
    } else {
        return false;
    }
}


function round9sf(num) {
    return num.toPrecision(9);
}
//console.log(isFloat(77.1));
//console.log(round9sf(56.225));

//note: should not eval more than a single pair of no at a time
//round answers with long decimals
// blaj baj