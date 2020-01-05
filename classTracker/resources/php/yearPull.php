<?php
include 'conn.php';

header('content-type: application/json');

$sql = "select * from years ORDER BY `year` ASC";
$result = mysqli_query($conn, $sql) or die ("Error".mysqli_error($conn));
$myArray = array();
while ($row = mysqli_fetch_assoc($result)) {
  $myArray[] = $row;
}

$json = json_encode($myArray);

echo $json;

?>
