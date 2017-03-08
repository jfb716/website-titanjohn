<?php
$conn = new mysqli("localhost","titanjohn","bull1607","titanJohn");
if($conn->connect_error){die("error");}

foreach ($_POST as $field_name => $val) {
  $fieldId = strip_tags(trim($field_name));
  $val = strip_tags(trim(mysql_real_escape_string($val)));
  $split_data = explode(':', $fieldId);
  $user_id = $split_data[1];
  $field_name = split_data[0];
  $sql = "UPDATE siteManage SET $field_name = '$val' WHERE id = '$user_id'";

  if($conn->query($sql) === TRUE){
    echo 'success';
  }else{
    echo 'error '. mysqli_error($conn);
  }
}


$conn->close();
?>
