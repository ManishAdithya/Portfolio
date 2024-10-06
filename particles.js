document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("background-canvas");
    const ctx = canvas.getContext("2d");

    // Resize canvas to fit the entire window
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();

    let particlesArray = [];
    const numberOfParticles = 100;
    let mouse = {
        x: null,
        y: null,
        radius: 50 // Increase the radius of interaction
    };

    // Update mouse position
    window.addEventListener("mousemove", (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    // Clear mouse position when the mouse leaves the canvas
    window.addEventListener("mouseout", () => {
        mouse.x = null;
        mouse.y = null;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
        }

        update() {
            // Update particle position
            this.x += this.speedX;
            this.y += this.speedY;

            // Boundary conditions
            if (this.x < 0 || this.x > canvas.width) {
                this.x = Math.random() * canvas.width;
            }

            if (this.y < 0 || this.y > canvas.height) {
                this.y = Math.random() * canvas.height;
            }

            // Interaction with mouse
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.radius) {
                this.speedX += dx / distance * 0.05; // Attract to mouse
                this.speedY += dy / distance * 0.05;
            }
        }

        draw() {
            ctx.fillStyle = "white";
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
    }

    // Connect particles and draw lines to the mouse
    function connect() {
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                    ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 20000})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }

            // Draw line between particle and mouse if within radius
            let dx = mouse.x - particlesArray[a].x;
            let dy = mouse.y - particlesArray[a].y;
            let mouseDistance = Math.sqrt(dx * dx + dy * dy);
            if (mouseDistance < mouse.radius) {
                ctx.strokeStyle = `rgba(255, 255, 255, ${1 - mouseDistance / mouse.radius})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }
        }
    }

    // Initialize particles
    function init() {
        particlesArray = [];
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    // Animate particles
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        connect();
        requestAnimationFrame(animate);
    }

    // Run initialization and animation
    init();
    animate();

    // Resize canvas on window resize
    window.addEventListener("resize", () => {
        resizeCanvas();
        init();
    });
});
