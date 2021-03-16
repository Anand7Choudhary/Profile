function main_menu() {
  document.getElementById("loading_body").style.display = "none";
  document.getElementById("main_body").style.display = "block";
}
function open_menu(){
    var x=document.getElementById("nav_content");
    var box1=document.getElementById("b1");
    var box2 = document.getElementById("b2");
    var box3 = document.getElementById("b3");
    if(x.style.display=="none")
    {
        x.style.display="flex";
        box1.style.transform="rotateZ(45deg) translateY(7px)";
        box3.style.transform = "rotateZ(-45deg) translateY(-7px)";
        box2.style.display="none";
    }
    else
    {
        x.style.display="none";
        box1.style.transform = "rotateZ(0deg)";
        box3.style.transform = "rotateZ(0deg)";
        box2.style.display = "block";
    }
}

var slideindex=1;
var x = document.getElementsByClassName("pro");
var y = document.getElementsByClassName("circleturn");
// var a = document.getElementById("leftturn");
// var b = document.getElementById("rightturn");
var del;
showproj(slideindex);

function move(n){
    slideindex+=n;
    showproj(slideindex);
}

function circlemove(n){
    slideindex = n;
    showproj(slideindex);
}

function showproj(n){
  var i;
//   a.addEventListener("click", function(){n--});
//   b.addEventListener("click", function(){n++});
  if (n > x.length) {
    slideindex = 1;
  }
  if (n < 1) {
    slideindex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.backgroundColor = "transparent";
  }
//   ++slideindex;
  x[slideindex - 1].style.display = "block";
  y[slideindex - 1].style.backgroundColor = "rgba(255,255,255)";
//   del = setTimeout(showproj, 2000, slideindex);
}