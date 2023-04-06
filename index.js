function cal() {
  var a = document.getElementById("display").value;
  document.getElementById("display").value = eval(a);
}
let b;
function display(value) {
  b = value;
  document.getElementById("display").value += value;
}
function Backspace() {
  document.getElementById("display").value = document.getElementById("display").value.slice(0, -1);
}

function Reset() {
  document.getElementById("display").value = "";
}
