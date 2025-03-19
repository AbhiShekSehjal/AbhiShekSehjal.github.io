let currentInput = "";

function pickNumber(val) {
  currentInput += val;

  document.getElementById("display").value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    document.getElementById("display").value = currentInput;
  } catch (e) {
    document.getElementById("display").value = "Error";
    currentInput = "";
  }
}