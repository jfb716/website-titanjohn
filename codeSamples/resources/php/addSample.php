<?php
$conn = new mysqli("localhost","titanjohn","bull1607","titanJohn");
if($conn->connect_error){die("error");}

$sql = $conn->prepare("INSERT INTO codeSamples (title, cat, url) VALUES (?,?,?)");
$sql->bind_param("sss",$_POST['title'],$_POST['cat'], $_POST['url']);

if($sql->execute()){
  echo 'success';
}else{
  echo 'error '. mysqli_error($conn);
}

$sql->close();
?>
