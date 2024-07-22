// // { <script>
// //     const canvas = document.getElementById('satelliteCanvas');
// //     const ctx = canvas.getContext('2d');

// //     const satelliteImg = new Image();
// //     satelliteImg.src = 'https://miniature.earth/demo/space-view.htm';

// //     let angle = 0;

// //     satelliteImg.onload = () => {
// //         animate();
// //     };

// //     function animate() {
// //         ctx.clearRect(0, 0, canvas.width, canvas.height);

// //         // Draw the Satellite
// //         const satelliteX = canvas.width / 2 + 120 * Math.cos(angle);
// //         const satelliteY = canvas.height / 2 + 120 * Math.sin(angle);
// //         ctx.save();
// //         ctx.translate(satelliteX, satelliteY);
// //         ctx.rotate(-angle);
// //         ctx.drawImage(satelliteImg, -15, -15, 30, 30); // Resize the satellite image
// //         ctx.restore();

// //         angle += 0.01;

// //         requestAnimationFrame(animate);
// //     }
// // </script> }

// document.addEventListener("DOMContentLoaded", function () {
//     const canvas = document.getElementById('satelliteCanvas');
//     const ctx = canvas.getContext('2d');

//     let angle = 0;

//     function drawSatellite() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         ctx.save();
//         ctx.translate(canvas.width / 2, canvas.height / 2);
//         ctx.rotate(angle);
//         ctx.translate(100, 0);

//         ctx.fillStyle = 'red';
//         ctx.beginPath();
//         ctx.arc(0, 0, 10, 0, 2 * Math.PI);
//         ctx.fill();

//         ctx.restore();

//         angle += 0.01;
//         requestAnimationFrame(drawSatellite);
//     }

//     drawSatellite();
// });

// Neural Network Animation
const canvas = document.getElementById('satelliteCanvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

let nodes = [];
let connections = [];

function initNodes() {
    for (let i = 0; i < 10; i++) {
        nodes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 5 + 2,
            color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`
        });
    }
}

function initConnections() {
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            connections.push({
                x1: nodes[i].x,
                y1: nodes[i].y,
                x2: nodes[j].x,
                y2: nodes[j].y,
                color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.2)`
            });
        }
    }
}

function animateNeuralNetwork() {
    ctx.clearRect(0, 0, width, height);

    // Draw connections
    connections.forEach(conn => {
        ctx.beginPath();
        ctx.strokeStyle = conn.color;
        ctx.moveTo(conn.x1, conn.y1);
        ctx.lineTo(conn.x2, conn.y2);
        ctx.stroke();
    });

    // Draw nodes
    nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
    });

    requestAnimationFrame(animateNeuralNetwork);
}

initNodes();
initConnections();
animateNeuralNetwork();

// Line Chart Visualization
const ctxChart = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctxChart, {
    type: 'line',
    data: {
        labels: ['Python', 'AI', 'ML', 'R&D'],
        datasets: [{
            label: 'Skill Ratings',
            data: [80, 55, 70, 91], // Skill ratings
            borderColor: ['#4CAF50', '#FF5722', '#2196F3', '#FFC107'], // Colors for lines
            backgroundColor: 'rgba(0,0,0,0)', // Transparent fill
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true,
                min: 0,
                max: 100,
                ticks: {
                    color: '#00BFFF', // Axis color
                },
                grid: {
                    display: false // Hide grid lines
                }
            },
            y: {
                ticks: {
                    color: '#00BFFF', // Axis color
                },
                grid: {
                    display: false // Hide grid lines
                }
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});
