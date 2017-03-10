<?php
$conn = new mysqli("localhost","titanjohn","bull1607","titanJohn");
if($conn->connect_error){die("error");}

$id = $_POST['id'];
$text = $_POST['text'];
$th = $_POST['th'];
$sql = "UPDATE siteManage SET $th = '$text' WHERE id = '$id'";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();
?>
