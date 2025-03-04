<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="CSS/styles.css">
</head>
<body>
    <div class="container1">
        <h2>Register</h2>
        <form action="register.php" method="POST" onsubmit="return validatePasswords()">
            <input type="text" name="name" placeholder="Name" required>
            <input type="email" name="email" placeholder="Email" required>
            <input type="password" id="password" name="password" placeholder="Password" required>
            <input type="password" id="confirm_password" name="confirm_password" placeholder="Confirm Password" required>
            <p id="error-message" style="color: red; font-size: 14px;"></p>
            <button type="submit">Register</button>
        </form>
        <p>Already have an account? <a href="index.php">Login here</a></p>
    </div>

    <script>
        function validatePasswords() {
            var password = document.getElementById("password").value;
            var confirm_password = document.getElementById("confirm_password").value;
            var errorMessage = document.getElementById("error-message");

            if (password !== confirm_password) {
                errorMessage.textContent = "Passwords do not match!";
                return false; // Prevent form submission
            } else {
                errorMessage.textContent = ""; // Clear error message if passwords match
                return true;
            }
        }
    </script>
</body>
</html>
