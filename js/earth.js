<script>
    const canvas = document.getElementById('satelliteCanvas');
    const ctx = canvas.getContext('2d');

    const satelliteImg = new Image();
    satelliteImg.src = 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Satellite_icon.png';

    let angle = 0;

    satelliteImg.onload = () => {
        animate();
    };

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw the Satellite
        const satelliteX = canvas.width / 2 + 120 * Math.cos(angle);
        const satelliteY = canvas.height / 2 + 120 * Math.sin(angle);
        ctx.save();
        ctx.translate(satelliteX, satelliteY);
        ctx.rotate(-angle);
        ctx.drawImage(satelliteImg, -15, -15, 30, 30); // Resize the satellite image
        ctx.restore();

        angle += 0.01;

        requestAnimationFrame(animate);
    }
</script>
