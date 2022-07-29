
var x = document.getElementById("c");
x.addEventListener("click", myFunction);
function myFunction() {
    document.getElementById("idHOne").style.color = "red";
  }
let displayOne
// document.getElementById("1").innerText = "one";
function buttonOne() {
  let text = document.getElementById(1).innerText;
  let a =  document.getElementById("displayOne").innerText;
  document.getElementById("displayOne").innerText = a + text;

  console.log(a)
  console.log(text)
}
function buttonTwo() {
    let text = document.getElementById(2).innerText;
    let a =  document.getElementById("displayOne").innerText;
    document.getElementById("displayOne").innerText = a + text;
  
    console.log(text)
    return  text
}
function buttonThree() {
    let text = document.getElementById(3).innerText;
    let a =  document.getElementById("displayOne").innerText;
    document.getElementById("displayOne").innerText = a + text;
  
    console.log(text)
    return text
}
function buttonFour() {
    let text = document.getElementById(4).innerText;
    let a =  document.getElementById("displayOne").innerText;
    document.getElementById("displayOne").innerText = a + text;
  
    console.log(text)
    return text
}
function buttonFive() {
    let text = document.getElementById(5).innerText;
    let a =  document.getElementById("displayOne").innerText;
    document.getElementById("displayOne").innerText = a + text;
  
    console.log(text)
    return text
}
function buttonSix() {
      let text = document.getElementById(6).innerText;
      let a =  document.getElementById("displayOne").innerText;
      document.getElementById("displayOne").innerText = a + text;
    
      console.log(text)
      return text
}

function buttonSev() {
    let text = document.getElementById(7).innerText;
    let a =  document.getElementById("displayOne").innerText;
    document.getElementById("displayOne").innerText = a + text;
  
    console.log(text)
    return text
}
function buttonEight() {
      let text = document.getElementById(8).innerText;
      let a =  document.getElementById("displayOne").innerText;
      document.getElementById("displayOne").innerText = a + text;
    
      console.log(text)
 }
function buttonNine() {
      let text = document.getElementById(9).innerText;
      let a =  document.getElementById("displayOne").innerText;
      document.getElementById("displayOne").innerText = a + text;
    
      console.log(text)
}
function buttonZero() {
      let text = document.getElementById(0).innerText;
      let a =  document.getElementById("displayOne").innerText;
      document.getElementById("displayOne").innerText = a + text;
    
      console.log(text)
      console.log(a + text)
      return a + text
}
function buttonC() {
        // let text = document.getElementById(c).innerText;
        // let a =  document.getElementById("displayOne").innerText;
        document.getElementById("displayOne").innerText = "";
      
        // console.log(text)
}
function buttonNeg() {
        // let text = document.getElementById(+/-).innerText;
        console.log(text)
}
// function buttonOne() {
//     let text = document.getElementById(1).innerText;
//     console.log(text)
// }
// function buttonOne() {
//     let text = document.getElementById(1).innerText;
//     console.log(text)
// }
// function buttonOne() {
//     let text = document.getElementById(1).innerText;
//     console.log(text)
// }
function buttonPlus() {
    // let text = document.getElementById().innerText;
    // console.log(text)
    // document.getElementById("7").innerText = "seven";
    add();
  }


 function operator() {
//    div.getAttribute('ID')
//    console.log(ID)
}
operator()

let a = a + text;

let b = 57

console.log(a)
function add(a, b) {
    parseInt(a);
    parseInt(b);
    // console.log(a)
    // console.log(b)
    console.log(a + b)
    return a + b

}

function substract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  return a / b
}

function operate(operator, a, b) {
  a = Number(a)
  b = Number(b)
  switch (operator) {
    case '+':
      return add(a, b)
    case '−':
      return substract(a, b)
    case '×':
        console.log(this)
      return multiply(a, b)
   
    case '÷':
      if (b === 0) return null
      else return divide(a, b)
    default:
      return null
  }
}
operate()
// console.log(this)