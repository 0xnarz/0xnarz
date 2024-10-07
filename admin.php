<?php
session_start();

// Dummy admin credentials
$admin_username = 'admin';
$admin_password = 'password';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username == $admin_username && $password == $admin_password) {
        $_SESSION['logged_in'] = true;
        header("Location: post.php");
        exit();
    } else {
        echo "Invalid username or password.";
    }
}
?>
