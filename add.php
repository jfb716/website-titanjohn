<?php
$conn = new mysqli("localhost","jfblack","bull1607","john_master");
if($conn->connect_error){die("error");}

$sql = $conn->prepare("INSERT INTO classes (class, site, category, complete, recommend) VALUES (?,?,?,?,?)");
$sql->bind_param("sssds",$_POST['class'],$_POST['site'], $_POST['category'], $_POST['complete'], $_POST['recommend']);

if($sql->execute()){
  echo 'success';
}else{
  echo 'error '. mysqli_error($conn);
}

$sql->close();
?>
