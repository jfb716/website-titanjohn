<?php
include('conn.php');

$title = $_POST['title'];
$auth = $_POST['auth'];
$isbn = $_POST['isbn'];
$cat = $_POST['cat'];
$byear = $_POST['byear'];
$ryear = $_POST['ryear'];

$sql = "INSERT INTO bookTracker (title, auth, isbn, cat, byear, ryear)";
$sql .= " VALUES ('$title', '$auth', '$isbn', '$cat', '$byear', '$ryear')";

$result = mysqli_query($conn, $sql);

if(!$result) {
  die("Query Failed: " . mysqli_error());
}
?>
