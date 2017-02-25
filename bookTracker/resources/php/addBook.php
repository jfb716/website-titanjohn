<?php
$conn = new mysqli("localhost","titanjohn","bull1607","titanJohn");
if($conn->connect_error){die("error");}

$sql = $conn->prepare("INSERT INTO bookTracker (title, auth, isbn, cat, byear, ryear) VALUES (?,?,?,?,?,?)");
$sql->bind_param("ssssii",$_POST['title'],$_POST['auth'], $_POST['isbn'], $_POST['cat'], $_POST['byear'], $_POST['ryear']);

if($sql->execute()){
  echo 'success';
}else{
  echo 'error '. mysqli_error($conn);
}

$sql->close();
?>
