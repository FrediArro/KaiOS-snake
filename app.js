window.addEventListener("load", function() {
  console.log("Snake Game opened");
});

// reference to canvas
var canvas = document.getElementById("mycanvas");
    var w = window.innerWidth-20 + "px";
    var h = window.innerHeight-70 + "px";
    var ctx = mycanvas.getContext('2d');
    var snakeSize = 10;
    var score = 0;
    var snake;
    var snakeSize = 10;
    var food;

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

// functions for the D-pad buttons
const softkeyCallback = {
    left: function() { canvas.style.backgroundColor = "#2E4801"; },
    right: function() { console.log('You click on ArrowRight') },
    down: function() { console.log('You click on ArrowDown') },
    up: function() { console.log('You click on ArrowUp') },
};
//function to react to kry presses
function handleKeyDown(evt) {
    switch (evt.key) {
        case 'ArrowLeft':
            // Action case press left key
            softkeyCallback.left();
        break;

        case 'ArrowRight':
            // Action case press right key
            softkeyCallback.right();
        break;

        case 'ArrowDown':
            // Action case press center key
            softkeyCallback.down();
        break;

        case 'ArrowUp':
            // Action case press left key
            softkeyCallback.up();
        break;
    }
};
//listener that listens for button presses
document.addEventListener('keydown', handleKeyDown);
//source to button listener: https://developer.kaiostech.com/first-app/softkeys
