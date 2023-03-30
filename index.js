function cal() {
  var a = document.getElementById("display").value;
  var b = eval(a);
  document.getElementById("display").value = b;
}

function display(value) {
  document.getElementById("display").value += value;
}

function Reset() {
  document.getElementById("display").value = "";
}
