let calculationDone = false;
const display = document.getElementById("dis");


//takes mouse input for numbers
function appear(value) {
  if (calculationDone) {
    display.innerText = "";
    calculationDone = false;
  }
  if(display.innerHTML=="0"){
    display.innerText ="";
    display.innerText += value;
  }
  else
  display.innerText += value;
}

// for AC function
function allClear() {
  document.getElementById("dis").innerText = "0";
}

// for C function
function Clear() {
  if (calculationDone) {
    display.innerText = "0";
  }
  else {
    display.innerText = display.innerText.slice(0, -1);
    if(display.innerText.length==0){
      display.innerText="0";
    }
  }
}

// calculates the dis
function calculate() {
  let result = eval(document.getElementById("dis").innerText);
  document.getElementById("dis").innerText = result;
  calculationDone = true;
}


// for keyboard
document.addEventListener("keydown",function(event){
  console.log(event.key);
  if((event.key>=0 && event.key<=9) || event.key=='+'|| event.key=='-'|| event.key=='/' || event.key=='*'){
    appear(event.key);
  }
  else if(event.key=='Delete'){
    allClear();
  }
  else if(event.key=='Backspace'){
    Clear();
  }
  else if((event.key=='=' || event.key=="Enter") && calculationDone==false){
    calculate();
  }
})
