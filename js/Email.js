// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the default form submission behavior

//     // Collect form data
//     const name = document.getElementById('name').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const message = document.getElementById('message').value.trim();

//     // Validate form fields
//     if (!name || !email || !message) {
//         // Display alert if any field is empty
//         alert('Please fill in all required fields.');
//         return; // Exit the function if validation fails
//     }

//     // If all fields are filled, proceed with form submission
//     // Show loading message
//     document.getElementById('formResponse').textContent = 'Sending message...';

//     // Create a FormData object to submit the form
//     const formData = new FormData(this);

//     // Send form data using Fetch API
//     fetch(this.action, {
//         method: 'POST',
//         body: formData,
//     })
//     .then(response => {
//         if (response.ok) {
//             // Success
//             document.getElementById('formResponse').textContent = 'Thank you for your message. I will get back to you soon!';
//             document.getElementById('contactForm').reset(); // Reset form fields
//         } else {
//             // Error
//             document.getElementById('formResponse').textContent = 'Oops! Something went wrong. Please try again.';
//         }
//     })
//     .catch(() => {
//         // Network or server error
//         document.getElementById('formResponse').textContent = 'Oops! Something went wrong. Please try again.';
//     });
// });


<script>
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const form = event.target;
    const formData = new FormData(form);

    // Create an XMLHttpRequest to send the form data
    const xhr = new XMLHttpRequest();
    xhr.open('POST', form.action, true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            document.getElementById('formResponse').innerHTML = xhr.responseText;
            form.reset(); // Clear the form after submission
        } else {
            document.getElementById('formResponse').innerHTML = 'Oops! Something went wrong.';
        }
    };
    xhr.send(formData);
});
</script>
