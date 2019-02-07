function MyShowFunct_bh() {
  var x = document.getElementById("cont_bh");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function MyShowFunct_accr() {
  var x = document.getElementById("cont_accr");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function MyShowFunct_myresearch() {
  var x = document.getElementById("cont_myresearch");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function MyPopup() {
      var popup = document.getElementById("myPopup");
      popup.classList.toggle("show");    
}
