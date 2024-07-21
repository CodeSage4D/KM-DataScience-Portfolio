// script.js
document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.createElement('canvas');
    document.querySelector('.neural-network').appendChild(canvas);
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const numParticles = 100; // Adjust the number of particles
    let neuronSpeed = 0.5; // Default speed

    function createParticle(x, y) {
        return {
            x: x,
            y: y,
            radius: Math.random() * 3 + 1,
            color: 'rgba(0, 0, 0, 0.7)',
            speedX: (Math.random() - 0.5) * neuronSpeed,
            speedY: (Math.random() - 0.5) * neuronSpeed
        };
    }

    function drawParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.lineWidth = 1;

        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        });

        // Draw lines between particles
        particles.forEach((p1, i) => {
            particles.forEach((p2, j) => {
                if (i !== j) {
                    const dx = p2.x - p1.x;
                    const dy = p2.y - p1.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            });
        });
    }

    function updateParticles() {
        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        });
    }

    function animate() {
        drawParticles();
        updateParticles();
        requestAnimationFrame(animate);
    }

    function createNeurons() {
        particles.length = 0; // Clear previous particles
        for (let i = 0; i < numParticles; i++) {
            particles.push(createParticle(Math.random() * canvas.width, Math.random() * canvas.height));
        }
    }

    createNeurons();
    animate();

    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        createNeurons();
    });

    let isMoving = false;
    document.addEventListener('mousemove', function (e) {
        isMoving = true;
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        particles.forEach(p => {
            const dx = p.x - mouseX;
            const dy = p.y - mouseY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const force = Math.min(100 / distance, 2);
            p.speedX += (dx / distance) * force;
            p.speedY += (dy / distance) * force;
        });
    });

    document.addEventListener('mouseleave', function () {
        isMoving = false;
    });

    function updateNeurons() {
        if (isMoving) {
            drawParticles();
            updateParticles();
            requestAnimationFrame(updateNeurons);
        }
    }

    updateNeurons();

    // Function to set neuron speed
    window.setNeuronSpeed = function(speed) {
        neuronSpeed = speed;
        particles.forEach(p => {
            p.speedX = (Math.random() - 0.5) * neuronSpeed;
            p.speedY = (Math.random() - 0.5) * neuronSpeed;
        });
    };
});
