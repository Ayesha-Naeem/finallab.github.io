<?php
include 'connection.php';
// Retrieve form data
$title = $_POST['title'];
$author = $_POST['author'];
$genre = $_POST['genre'];
$publication_date = $_POST['publication_date'];

// Insert data into the database
$sql = "INSERT INTO register (name, author, genre, date) VALUES ('$title', '$author', '$genre', '$publication_date')";

if (mysqli_query($con, $sql)) {
    echo "Record added successfully";
    header("Location: record.php");
        exit;
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($con);
}

// Close the database connection
mysqli_close($con);
?>
