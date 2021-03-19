function main_menu() {
  document.getElementById("loading_body").style.display = "none";
  if (window.screen.width < 450) {
    document.getElementById("main_body").style.display = "block";
    funicon1();
  } else {
    document.getElementById("main_body").style.display = "block";
  }
}

function open_menu() {
  var x = document.getElementById("nav_content");
  var box1 = document.getElementById("b1");
  var box2 = document.getElementById("b2");
  var box3 = document.getElementById("b3");
  if (x.style.display == "none") {
    x.style.display = "flex";
    box1.style.transform = "rotateZ(45deg) translateY(7px)";
    box3.style.transform = "rotateZ(-45deg) translateY(-7px)";
    box2.style.display = "none";
  } else {
    x.style.display = "none";
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
  si2 += n - 1;
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
  clear2 = setTimeout(slideshow2, 3000);
}

function opengal() {
  var q = document.getElementById("profile");
  var w = document.getElementById("aboutme");
  var e = document.getElementById("mywork");
  var r = document.getElementById("gallery");
  var u = document.getElementById("nav");
  var t = document.getElementById("fullGal");
  if (t.style.display == "none") {
    q.style.display = "none";
    w.style.display = "none";
    e.style.display = "none";
    r.style.display = "none";
    u.style.display = "none";
    t.style.display = "block";
  } else if (window.screen.width > 450) {
    q.style.display = "block";
    w.style.display = "flex";
    e.style.display = "block";
    r.style.display = "block";
    u.style.display = "flex";
    t.style.display = "none";
  } else {
    q.style.display = "none";
    w.style.display = "none";
    e.style.display = "none";
    r.style.display = "block";
    u.style.display = "none";
    t.style.display = "none";
     (document.getElementById("contact").style.display = "none");
  (document.getElementById("footer").style.display = "none");
  }
}
function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
function funicon1() {
  document.getElementById("icon1").style.color = "rgb(0, 189, 63)";
  document.getElementById("icon2").style.color = "rgb(180, 180, 180)";
  document.getElementById("icon3").style.color = "rgb(180, 180, 180)";
  document.getElementById("icon4").style.color = "rgb(180, 180, 180)";
  document.getElementById("icon5").style.color = "rgb(180, 180, 180)";
  sleep(250).then(() => {
    // Do something after the sleep!
    document.getElementById("profile").style.display = "block";
    document.getElementById("aboutme").style.display = "none";
    document.getElementById("mywork").style.display = "none";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("nav").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById("footer").style.display = "none";
    document.getElementById("fullGal").style.display = "none";
  });
}
function funicon2() {
  document.getElementById("icon1").style.color = "rgb(180, 180, 180)";
  document.getElementById("icon2").style.color = "rgb(0, 189, 63)";
  document.getElementById("icon3").style.color = "rgb(180, 180, 180)";
  document.getElementById("icon4").style.color = "rgb(180, 180, 180)";
  document.getElementById("icon5").style.color = "rgb(180, 180, 180)";
  sleep(250).then(() => {
    // Do something after the sleep!
   (document.getElementById("profile").style.display = "none");
  (document.getElementById("aboutme").style.display = "block");
  (document.getElementById("mywork").style.display = "none");
  (document.getElementById("gallery").style.display = "none");
   (document.getElementById("nav").style.display = "none");
   (document.getElementById("contact").style.display = "none");
  (document.getElementById("footer").style.display = "none");
  (document.getElementById("fullGal").style.display="none"); 
  });
}
function funicon3() {
  document.getElementById("icon1").style.color = "rgb(180, 180, 180)";
  document.getElementById("icon2").style.color = "rgb(180, 180, 180)";
  document.getElementById("icon3").style.color = "rgb(0, 189, 63)";
  document.getElementById("icon4").style.color = "rgb(180, 180, 180)";
  document.getElementById("icon5").style.color = "rgb(180, 180, 180)";
  sleep(250).then(() => {
    // Do something after the sleep!
    document.getElementById("profile").style.display = "none";
  document.getElementById("aboutme").style.display = "none";
  document.getElementById("mywork").style.display = "block";
  document.getElementById("gallery").style.display = "none";
  document.getElementById("nav").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("footer").style.display = "none";
  document.getElementById("fullGal").style.display = "none";
  });
}
function funicon4() {
  document.getElementById("icon1").style.color = "rgb(180, 180, 180)";
  document.getElementById("icon2").style.color = "rgb(180, 180, 180)";
  document.getElementById("icon3").style.color = "rgb(180, 180, 180)";
  document.getElementById("icon4").style.color = "rgb(0, 189, 63)";
  document.getElementById("icon5").style.color = "rgb(180, 180, 180)";
  sleep(250).then(() => {
    // Do something after the sleep!
    document.getElementById("profile").style.display = "none";
  document.getElementById("aboutme").style.display = "none";
  document.getElementById("mywork").style.display = "none";
  document.getElementById("gallery").style.display = "block";
  document.getElementById("nav").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("footer").style.display = "none";
  document.getElementById("fullGal").style.display = "none";
  });
}
function funicon5() {
  document.getElementById("icon1").style.color = "rgb(180, 180, 180)";
  document.getElementById("icon2").style.color = "rgb(180, 180, 180)";
  document.getElementById("icon3").style.color = "rgb(180, 180, 180)";
  document.getElementById("icon4").style.color = "rgb(180, 180, 180)";
  document.getElementById("icon5").style.color = "rgb(0, 189, 63)";
    document.getElementById("profile").style.display = "none";
  document.getElementById("aboutme").style.display = "none";
  document.getElementById("mywork").style.display = "none";
  document.getElementById("gallery").style.display = "none";
  document.getElementById("nav").style.display = "none";
  document.getElementById("contact").style.display = "block";
  document.getElementById("footer").style.display = "flex";
  document.getElementById("fullGal").style.display = "none";
}
