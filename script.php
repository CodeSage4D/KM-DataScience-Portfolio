<?php
// Enable error reporting
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Check request method
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and retrieve form data
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Email details
    $to = "karapmishra.3122@gmail.com"; // Replace with your email address
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    // Validate input
    if (!empty($name) && !empty($email) && !empty($message)) {
        if (mail($to, $subject, $body, $headers)) {
            echo "<p>Thank you for your message. I will get back to you soon!</p>";
        } else {
            echo "<p>Oops! Something went wrong. Please try again.</p>";
        }
    } else {
        echo "<p>Please fill in all required fields.</p>";
    }
} else {
    echo "<p>Invalid request method.</p>";
}
?>

