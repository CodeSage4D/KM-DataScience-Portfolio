document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        // Simulate sending email
        console.log(`Sending message from ${name} (${email}) with subject ${subject}: ${message}`);

        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('open');
        navToggle.classList.toggle('active');

        // Toggle the lines to X shape
        const navToggleIcon = document.querySelector('.nav-toggle-icon');
        navToggleIcon.classList.toggle('open');
    });
});

<script>
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');

    function checkVisibility() {
        const windowHeight = window.innerHeight;
        const scrollY = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top + scrollY;
            const sectionHeight = section.offsetHeight;

            if (scrollY + windowHeight > sectionTop + sectionHeight / 4) {
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
});
</script>
