var x = document.getElementsByClassName("numberButton");

for (var i = 0 ; i < x.length; i++) {
    x[i].addEventListener('click', appendButtonValue(x));
    // console.log(this.innerText) 
 }
// x.addEventListener("click", myFunction);
function appendButtonValue(x) {
    // let buttonPressd = x.HTMLCollection
    // console.log(buttonPressed)
    // let buttonPressed = HTMLCollection
    // var arr = Array.prototype.slice.call(HTMLCollection)
    let arr = Array.from(x);
    let numberButtonValues = []
    for (var i = 0 ; i < arr.length; i++) {
    numberButtonValues.push(arr[i].text)
    // numberButtonValues.pop(arr[])
    }
    // arr[0]
    console.log(arr);
    console.log(numberButtonValues)
    console.log(x)
    // console.log(arr(1))
    // console.log(HTMLCollection)
    // console.log(x)
    // document.innerText
    // document.getElementById("idHOne").style.color = "red";
  }

  function titleFunction(){
    document.getElementById("idHOne").style.color = "red";
  }

  function add(a, b){
      
  }
// const collection = document.getElementsByClassName("numberButton");
// collection.addEventListener("click", myFunction)
// function myFunction() {
//     document.getElementById("idHOne").style.color = "red";
//   }
// collection[0].innerHTML = "Hello World!";