function openPrintBox2() {
  var a = document.getElementById("list-and-print-box#1");
  if (a.classList.contains("kzt-box--display-mob")) {
    a.classList.remove("kzt-box--display-mob");
    document.getElementById("overlay#1").style.display = "none";
  } else {
    a.classList.add("kzt-box--display-mob");
    document.getElementById("overlay#1").style.display = "block";
  }
}

function closePrintBox() {
  var b = document.getElementById("list-and-print-box#1");
  b.classList.remove("kzt-box--display-mob");
  document.getElementById("overlay#1").style.display = "none";
}