<?php
inlude('conn.php');

header('content-type: application/json');

$sql = "select * from codeSamples";
$result = mysqli_query($conn, $sql) or die ("Error".mysqli_error($conn));
$myArray = array();
while ($row = mysqli_fetch_assoc($result)) {
  $myArray[] = $row;
}

mysqli_close($conn);

$json = json_encode($myArray);

echo $json;

?>
