window.addEventListener("load", function() {
  console.log("Snake Game opened");
});

// reference to canvas
var canvas = document.getElementById("mycanvas");
    var w = window.innerWidth-20 + "px";
    var h = window.innerHeight-70 + "px";
function resizeCanvas() {
    canvas.style.width = w;
  // artifical delay so innerHeight is correct
  setTimeout(function() {
    canvas.style.height = h;
  }, 0);
};
// So we fire it manually...
resizeCanvas();
//source to canvas resizing function: https://blog.codepen.io/2013/07/29/full-screen-canvas/
