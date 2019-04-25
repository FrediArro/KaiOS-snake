window.addEventListener("load", function() {
  console.log("Snake Game opened");
});

// reference to canvas source: https://blog.codepen.io/2013/07/29/full-screen-canvas/
var can = document.getElementById("full");

function resizeCanvas() {
  can.style.width = window.innerWidth-20 + "px";
  // artifical delay so innerHeight is correct
  setTimeout(function() {
    can.style.height = window.innerHeight-20 + "px";
  }, 0);
};

// Webkit/Blink will fire this on load, but Gecko doesn't.
window.onresize = resizeCanvas;

// So we fire it manually...
resizeCanvas();
