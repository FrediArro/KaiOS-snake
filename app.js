window.addEventListener("load", function() {
  console.log("Snake Game opened");
});

// reference to canvas
var w = window.innerWidth-20 + "px";
var h = window.innerHeight-70 + "px";
var myGamePiece;

// function resizeCanvas() {
//     canvas.style.width = w;
//   // artifical delay so innerHeight is correct
//   setTimeout(function() {
//     canvas.style.height = h;
//   }, 0);
// };
// So we fire it manually...
// resizeCanvas();
//source to canvas resizing function: https://blog.codepen.io/2013/07/29/full-screen-canvas/

function startGame() {
    myGamePiece = new component(30, 30, "red", 10, 120);
    myGameArea.start();
}

var myGameArea = {
  canvas : document.createElement("canvas"),
    start : function() {
      this.canvas.style.width = w;
      this.canvas.style.height = h;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
}


function moveLeft() {
  myGamePiece.speedX = -1;
}

function moveRight() {
   myGamePiece.speedX = 1;
}

function moveDown() {
   myGamePiece.speedY = 1;
}

function moveUp() {
   myGamePiece.speedY = -1;
}

//function to react to key presses
function handleKeyDown(evt) {
    switch (evt.key) {
        case 'ArrowLeft':
            // Action case press left key
            moveLeft();
        break;

        case 'ArrowRight':
            // Action case press right key
             moveRight();
        break;

        case 'ArrowDown':
            // Action case press center key
             moveDown();
        break;

        case 'ArrowUp':
            // Action case press left key
             moveUp();
        break;
    }
};
//listener that listens for button presses
document.addEventListener('keydown', handleKeyDown);
//source to button listener: https://developer.kaiostech.com/first-app/softkeys
function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
}
