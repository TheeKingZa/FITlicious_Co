// login.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const guestButton = document.querySelector('button');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve user input from the form
        const email = loginForm.elements.email.value;
        const password = loginForm.elements.password.value;

        // Example: Validate user credentials and log them in
        if (email === 'guest@example.com' && password === 'guestpassword') {
            // Log in as guest
            alert('Logged in as guest.');
            disableLoginForm(); // Disable login form inputs
            startSessionTimer(); // Start session timer for 30 minutes
        } else {
            // Invalid credentials
            alert('Invalid email or password.');
        }
    });

    // Function to disable login form inputs
    function disableLoginForm() {
        const inputs = loginForm.getElementsByTagName('input');
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].disabled = true;
        }
    }

    // Function to start session timer for 30 minutes
    function startSessionTimer() {
        setTimeout(() => {
            alert('Your guest session has expired.');
            window.location.reload(); // Refresh the page to reset the session
        }, 30 * 60 * 1000); // 30 minutes in milliseconds
    }

    // Handle click event for the guest button
    guestButton.addEventListener('click', () => {
        // Simulate form submission when guest button is clicked
        loginForm.submit();
    });
});
