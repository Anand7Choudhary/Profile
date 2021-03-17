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


var si = 1;
var clear;
slideshow1();
function move(n) {
  clearTimeout(clear);
  si += n - 1;
  slideshow1();
}
function mover() {
  clearTimeout(clear);
  slideshow1();
}
function circlemove(n) {
  clearTimeout(clear);
  si = n;
  slideshow1();
}
function slideshow1() {
  var x = document.getElementsByClassName("pro");
  var y = document.getElementsByClassName("circleturn");
  var i;
  if (si < 1) {
    si = x.length;
  }
  if (si > x.length) {
    si = 1;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.backgroundColor = "transparent";
  }
  x[si - 1].style.display = "block";
  y[si - 1].style.backgroundColor = "white";
  si++;
  clear = setTimeout(slideshow1, 2000);
}

var si2 = 2;
var clear2;
slideshow2();
function move1(n) {
  clearTimeout(clear2);
  si2 += n -1;
  slideshow2();
}
function mover1() {
  clearTimeout(clear2);
  slideshow2();
}
function slideshow2() {
  var p = document.getElementsByClassName("pic");
  var z;
  if (si2 < 2) {
    si2 = p.length;
  }
  if (si2 >= p.length) {
    si2 = 2;
  }
  for (z = 0; z < p.length; z++) {
    p[z].style.display = "none";
  }
  p[si2 - 2].style.display = "block";
  p[si2 - 1].style.display = "block";
  p[si2].style.display = "block";
  si2++;
  clear2 = setTimeout(slideshow2, 4000);
}