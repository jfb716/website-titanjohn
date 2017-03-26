<?php
include 'conn.php';

$class = $_POST['class'];
$site = $_POST['site'];
$category = $_POST['category'];
$complete = $_POST['complete'];

$sql = "INSERT INTO classTracker (class, site, category, complete)";
$sql .= " VALUES ('$class', '$site', '$category', '$complete')";

$result = mysqli_query($conn, $sql);

if (!$result) {
  die("Query Failed: " . mysqli_error());
} else {
   echo 'success';
}
?>
