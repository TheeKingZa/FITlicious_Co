// Get the canvas element and its context
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Define an array to store information about the 3D boxes
const boxes = [];

// Create a function to initialize a 3D box
function createBox() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const size = Math.random() * 30 + 20;
    const speedX = Math.random() * 4 - 2; // Random horizontal speed
    const speedY = Math.random() * 4 - 2; // Random vertical speed
    const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

    boxes.push({ x, y, size, speedX, speedY, color });
}

// Create an initial set of 3D boxes
for (let i = 0; i < 10; i++) {
    createBox();
}

// Create a function to draw a 3D box
function drawBox(x, y, size, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
}

// Create an animation loop
function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let box of boxes) {
        box.x += box.speedX;
        box.y += box.speedY;

        // Wrap boxes around the canvas
        if (box.x > canvas.width) {
            box.x = -box.size;
        } else if (box.x < -box.size) {
            box.x = canvas.width;
        }

        if (box.y > canvas.height) {
            box.y = -box.size;
        } else if (box.y < -box.size) {
            box.y = canvas.height;
        }

        drawBox(box.x, box.y, box.size, box.color);
    }
}

animate();
