<?php
include('conn.php');

$id = $_POST['id'];
$text = $_POST['text'];
$th = $_POST['th'];
$sql = "UPDATE siteManage SET $th = '$text' WHERE id = '$id'";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}
?>
