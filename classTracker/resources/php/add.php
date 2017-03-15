<?php
include 'conn.php';

$sql = $conn->prepare("INSERT INTO classTracker (class, site, category, complete) VALUES (?,?,?,?)");
$sql->bind_param("sssi",$_POST['class'],$_POST['site'], $_POST['category'], $_POST['complete']);

if($sql->execute()){
  echo 'success';
}else{
  echo 'error '. mysqli_error($conn);
}

$sql->close();
?>
