document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.inputBox input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentNode.classList.add('focus');
        });
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentNode.classList.remove('focus');
            }
        });
    });

    document.getElementById('signin').addEventListener('click', function(event) {
        event.preventDefault();

        // Clear previous error messages
        document.getElementById('usernameError').textContent = '';
        document.getElementById('passwordError').textContent = '';

        let email = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let isValid = true;

        // Email validation
        if (email === '') {
            document.getElementById('usernameError').textContent = 'Email is required.';
            isValid = false;
        } else if (!validateEmail(email)) {
            document.getElementById('usernameError').textContent = 'Enter a valid email.';
            isValid = false;
        }

        // Password validation
        if (password === '') {
            document.getElementById('passwordError').textContent = 'Password is required.';
            isValid = false;
        } else if (!validatePassword(password)) {
            document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character including underscore.';
            isValid = false;
        }

        // If all validations pass, check credentials
        if (isValid) {
            // Retrieve stored user from local storage
            const storedUser = JSON.parse(localStorage.getItem('user'));

            // Check if the user exists
            if (storedUser && storedUser.email === email && storedUser.password === password) {
                // Redirect to index.html if credentials are correct
                window.location.href = 'index.html';
            } else {
                // Show error if credentials are incorrect
                document.getElementById('usernameError').textContent = 'Invalid email or password.';
            }
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }

    function validatePassword(password) {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._])[A-Za-z\d@$!%*?&._]{8,}$/;
        return re.test(password);
    }
});
