// signup.js

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve user input from the form
        const firstName = signupForm.elements.firstName.value;
        const lastName = signupForm.elements.lastName.value;
        const username = signupForm.elements.username.value;
        const email = signupForm.elements.email.value;
        const dob = signupForm.elements.dob.value;
        const password = signupForm.elements.password.value;
        const confirmPassword = signupForm.elements.confirmPassword.value;

        // Validate that the password and password confirmation match
        if (password !== confirmPassword) {
            alert('Password and password confirmation do not match.');
            return; // Exit the function if passwords don't match
        }

        // Generate a unique user ID consisting of 10 random characters
        const userId = generateUserId();

        // Prepare the user data to send to the backend
        const userData = {
            userId,
            firstName,
            lastName,
            username,
            email,
            dob,
            password
        };

        // Example: Send the user data to the backend using fetch API
        try {
            const response = await fetch('backend/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                // Signup successful
                alert('Signup successful! Please log in.');
                window.location.href = 'login.html'; // Redirect to login page
            } else {
                // Signup failed
                const errorData = await response.json();
                alert(`Signup failed: ${errorData.message}`);
            }
        } catch (error) {
            console.error('Error signing up:', error);
            alert('An unexpected error occurred. Please try again later.');
        }
    });
});

// Function to generate a unique user ID consisting of 10 random characters
function generateUserId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let userId = '';

    for (let i = 0; i < 10; i++) {
        userId += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return userId;
}
