<?php
$conn = mysqli_connect("localhost","titanjohn","bull1607","titanJohn") or die ("Error".mysqli_error($conn));

header('content-type: application/json');

$sql = "select * from siteManage";
$result = mysqli_query($conn, $sql) or die ("Error".mysqli_error($conn));
$myArray = array();
while ($row = mysqli_fetch_assoc($result)) {
  $myArray[] = $row;
}

mysqli_close($conn);

$json = json_encode($myArray);

echo $json;

?>
