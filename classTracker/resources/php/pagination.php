<?php
include 'conn.php';

header('content-type: application/json');

$pageNum = $_GET['page'];
switch ($pageNum) {
  case 1:
    $pageNum = $pageNum - 1;
    break;
  case 2:
    $pageNum = $pageNum + 8;
    break;
  case 3:
    $pageNum = $pageNum + 17;
    break;
  case 4:
    $pageNum = $pageNum + 26;
    break;
  case 5:
    $pageNum = $pageNum + 35;
    break;
  case 6:
    $pageNum = $pageNum + 44;
    break;
  case 7:
    $pageNum = $pageNum + 53;
    break;
  case 8:
    $pageNum = $pageNum + 62;
    break;
  case 9:
    $pageNum = $pageNum + 71;
    break;

  default:
    $pageNum = 0;
    break;
}


$sql = "select * from classTracker limit 10 offset " . $pageNum;
$result = mysqli_query($conn, $sql) or die ("Error".mysqli_error($conn));
$myArray = array();
while ($row = mysqli_fetch_assoc($result)) {
  $myArray[] = $row;
}

mysqli_close($conn);

$json = json_encode($myArray);

echo $json;

?>
