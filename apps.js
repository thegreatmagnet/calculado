let numberButtons = document.getElementsByClassName("numberButton");
let funcButtons = document.getElementsByClassName("funcButton");
let decimalButton = document.getElementsByClassName("decimalButton");
let equalsButton = document.getElementsByClassName("equalsButton");
let clearButton = document.getElementsByClassName("clear");
let displayOne = document.getElementById("displayOne");
let displayTwo = document.getElementsByClassName("displayTwo");
let displayThree = document.getElementsByClassName("displayThree");
let displayFour = document.getElementsByClassName("displayFour");
let a = document.getElementById("displayOne");
let b = document.getElementsByClassName("displayThree");
funcButtonEmpty = true
displayOneEmpty = true
displayThreeEmpty = true
displayFourEmpty = true
// console.log(v)
for (var i = 0 ; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', appendButtonValue);
}
for (var i = 0 ; i < funcButtons.length; i++) {
    funcButtons[i].addEventListener('click', appendFuncValue);
    // console.log(funcButtons)
}
for (var i = 0 ; i < decimalButton.length; i++) {
    decimalButton[i].addEventListener('click', appendDecimal);
}
for (var i = 0 ; i < equalsButton.length; i++) {
    equalsButton[i].addEventListener('click', appendEquals);
}
for (var i = 0 ; i < clearButton.length; i++) {
    clearButton[i].addEventListener('click', clearDisplays);
}

function clearDisplays(){
    // console.log("incleardisp");
    document.getElementById("displayOne").innerText = ""
    document.getElementById("displayTwo").innerText = ""
    document.getElementById("displayThree").innerText = ""
    document.getElementById("displayFour").innerText = ""
    funcButtonEmpty = true
    displayOneEmpty = true
    displayThreeEmpty = true
    displayFourEmpty = true
}

function appendButtonValue(numberButtons) {
    let e = numberButtons.path[0].innerText
    updateDisplay(e);
}
function appendFuncValue(funcButtons) {
    let e = funcButtons.path[0].innerText
    updateDisplayTwo(e);
}
function appendDecimal(decimalButton) {
    let o = decimalButton.path[0].innerText
}

function updateDisplay(e){
    // console.log(e)

    let displayTwo = document.getElementById("displayTwo").innerText;
    // let displayThree = document.getElementById("displayThree").innerText;
    let textOne = document.getElementById("displayOne").innerText;
    let textThree = document.getElementById("displayThree").innerText;
    
    if (displayTwo == ""){
        // displayOneEmpty = false
        console.log("displayOne has v, and displayOneEmpty is" + displayOneEmpty);
        parseInt(e);
        parseInt(textOne)
        document.getElementById("displayOne").innerText = textOne + e;
        console.log(displayTwo)

        // displayTwo = document.getElementById("displayTwo").innerText;
    }
    if (displayTwo !== "" && displayFour !==""){
        // displayOneEmpty = false
        console.log("displayOne has v, and displayOneEmpty is" + displayOneEmpty);
        console.log("displayTHREE" + e)
        parseInt(e);
        parseInt(textThree)
        document.getElementById("displayThree").innerText = textThree + e;
    }

}
function updateDisplayTwo(e){
    // let e = funcButtons.path[0].innerText
    document.getElementById("displayTwo").innerText = e;
    
    // updateDisplay(displayTwo);
}

// prepareValuesToIntegers(){

// }
function appendEquals(equalsButton) {
    // let o = equalsButton.path[0].innerText
    let displayOne = document.getElementById("displayOne").innerText;
    let displayTwo = document.getElementById("displayTwo").innerText
    let displayThree = document.getElementById("displayThree").innerText;
    a = parseInt(displayOne)
    b = parseInt(displayThree)
    o = displayTwo
    console.log("inEQUALS",  a, displayTwo, b)
    // function add(a, b){

    //     a + b
        
    //     return
    // }
    // function subtract(a, b){
    //     a - b
        
    //     return
    // }
    // function multiply(a, b){
    //     a * b
    
    //     return
    // }
    // function divide(a, b){
    //     a / b
    
    //     return
    // }
    // function percent(a, b){
    //     a % b
    
    //     return
    // }
    if(o == "+"){
        // add(a, b);
        let answer = a + b
        document.getElementById("displayFour").innerText = answer;
        console.log(answer)
    }
    if(o == "-"){
        // add(a, b);
        let answer = a - b
        document.getElementById("displayFour").innerText = answer;
        console.log(answer)
    }
    if(o == "X"){
        // add(a, b);
        let answer = a * b
        document.getElementById("displayFour").innerText = answer;
        console.log(answer)
    }
    if(o == "/"){
        // add(a, b);
        let answer = a / b
        document.getElementById("displayFour").innerText = answer;
        console.log(answer)
    }
  

}



function titleFunction(){
    document.getElementById("idHOne").style.color = "red";
}