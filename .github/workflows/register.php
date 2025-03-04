<?php
// Database connection settings
$host = "localhost"; // Change if necessary
$username = "root";  // Change if you have a different MySQL username
$password = "";      // Change if you have a MySQL password
$database = "fleetfloat"; // Your database name

// Connect to MySQL
$conn = new mysqli($host, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data and sanitize it
    $name = trim($_POST['name']);
    $email = trim($_POST['email']);
    $password = trim($_POST['password']);
    $confirm_password = trim($_POST['confirm_password']);

    // Check if passwords match
    if ($password !== $confirm_password) {
        echo "<script>alert('Passwords do not match!'); window.location.href='register.html';</script>";
        exit();
    }

    // Hash the password for security
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);

    // Check if email already exists
    $stmt = $conn->prepare("SELECT email FROM customer WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();
    
    if ($stmt->num_rows > 0) {
        echo "<script>alert('Email already registered!'); window.location.href='register.html';</script>";
        exit();
    }
    $stmt->close();

    // Insert user into database
    $stmt = $conn->prepare("INSERT INTO customer (name, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $hashed_password);
    
    if ($stmt->execute()) {
        echo "<script>alert('Registration successful! You can now login.'); window.location.href='index.php';</script>";
    } else {
        echo "<script>alert('Error: Could not register.'); window.location.href='register.html';</script>";
    }

    $stmt->close();
    $conn->close();
}
?>
