let calculationDone = false;

document.getElementById("dis").value = "0";

function appear(value) {
  if (calculationDone) {
    document.getElementById("dis").value = "";
    calculationDone = false;
  }
  // new
  if (document.getElementById("dis").value === "0") {
    document.getElementById("dis").value = value;
  } else {
    document.getElementById("dis").value += value;
  }
}

function allClear() {
  document.getElementById("dis").value = "0";
  calculationDone = false;
}

function Clear() {
  if (calculationDone) {
    document.getElementById("dis").value = "0";
    calculationDone = false;
  } else {
    document.getElementById("dis").value = document
      .getElementById("dis")
      .value.slice(0, -1);
    // new
    if (document.getElementById("dis").value === "") {
      document.getElementById("dis").value = "0";
    }
  }
}

function calculate() {
  let result = eval(document.getElementById("dis").value);
  document.getElementById("dis").value = result;
  calculationDone = true;
}

// for keyboard
document.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (
    (event.key >= 0 && event.key <= 9) ||
    event.key == "+" ||
    event.key == "-" ||
    event.key == "/" ||
    event.key == "*"
  ) {
    appear(event.key);
  } else if (event.key == "Delete") {
    allClear();
  } else if (event.key == "Backspace") {
    Clear();
  } else if (event.key == "=" || event.key == "Enter") {
    calculate();
  }
});

// document.getElementById("dis").value = "0";
