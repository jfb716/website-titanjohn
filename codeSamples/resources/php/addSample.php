<?php
include('conn.php');

$title = $_POST['title'];
$cat = $_POST['cat'];
$url = $_POST['url'];

$sql = "INSERT INTO codeSamples (title, cat, url)";
$sql .= " VALUES ('$title', '$cat', '$url')";

$result = mysqli_query($conn, $sql);

if(!$reult) {
  die("Query Failed: " . mysqli_error());
} else {
  echo "success";
}
?>
