<?php
session_start();

// Check if admin is logged in
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] != true) {
    header("Location: admin.html");
    exit();
}

// Handle post submission
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $post_content = $_POST['content'];
    $timestamp = date("Y-m-d H:i:s");

    // Save the post (you can save it to a file or a database)
    $file = fopen("posts.txt", "a");
    fwrite($file, "$post_content | $timestamp\n");
    fclose($file);

    header("Location: index.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Post Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="post-container">
        <h2>Write a new post</h2>
        <form action="post.php" method="post">
            <textarea name="content" placeholder="Write your post here..." required></textarea>
            <button type="submit">Post</button>
        </form>
    </div>
</body>
</html>
