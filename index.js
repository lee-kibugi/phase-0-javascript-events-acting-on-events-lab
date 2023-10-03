// Define the DODGER element and initial position
const DODGER = document.getElementById('dodger');
let dodgerLeftEdge = 0;

// Define the moveDodgerLeft function
function moveDodgerLeft() {
  dodgerLeftEdge = Math.max(0, dodgerLeftEdge - 4);
  DODGER.style.left = `${dodgerLeftEdge}px`;
}

// Define the moveDodgerRight function
function moveDodgerRight() {
  dodgerLeftEdge = Math.min(360, dodgerLeftEdge + 4);
  DODGER.style.left = `${dodgerLeftEdge}px`;
}

// Add event listener for left and right arrow keys
document.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft') {
    moveDodgerLeft();
  } else if (e.key === 'ArrowRight') {
    moveDodgerRight();
  }
});// Your code here
