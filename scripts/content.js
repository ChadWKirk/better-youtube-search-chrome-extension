// always waits the document to be loaded when shown
document.addEventListener("DOMContentLoaded", function () {
  console.log(document.getElementById("search-icon-legacy"));
});

console.log(document.querySelectorAll("button"));

document.querySelectorAll("button")[3].style.backgroundColor = "red";
