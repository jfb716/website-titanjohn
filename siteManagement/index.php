<!DOCTYPE html>
<html lang="en-US" ng-app="myApp" ng-controller="myCtrl">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="author" content="John F. Black">
        <meta name="description" content="Test Site for John F. Black">
        <meta name="keywords" content="John, John Black, John F Black, John F. Black, John Francis Black, Test Site, Test, Synacor, Facebook, NBC, NBCUniversal, LocalEdge, Buffalo, New York, New York City, NYC, Grand Island, University at Buffalo, UB, Technical Support, Ad Operations, AdOps, AdTech">
        <title>TitanJohn</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="/siteManagement/resources/css/siteManagement.css">
        <script src="/siteManagement/resources/js/siteManage.js">

        </script>
    </head>
    <header>
      <div class="container">
        <nav class="navbar navbar-inverse bg-inverse bg-faded navbar-toggleable-md">
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="/">
            <img src="/resources/images/titan.jpg" width="30" height="30" style="border-radius:15px" class="d-inline-block align-top" alt="">TitanJohn</a>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="http://titanjohn.com/goalsTracker">Goals Tracker</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="http://titanjohn.com/classTracker">Class Tracker</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="http://titanjohn.com/bookTracker">Book Tracker</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="http://titanjohn.com/cheatSheet">Cheat Sheet</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="http://titanjohn.com/codeSamples">Code Samples</a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="http://titanjohn.com/siteManagement">Site Management</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="http://titanjohn.com/personalProfile">Personal Profile</a>
                </li>
              </ul>
            </div>
        </nav>
      </div>
    </header>
    <body>
      <div class="jumbotron container">
        <table class="table table-striped table-inverse table-bordered">
          <thead>
            <tr>
              <th id="id" class="idCol">ID</th>
              <th id="siteName" class="h4"><u>Site Name</u></th>
              <th id="siteURL" class="h4"><u>Site URL</u></th>
              <th id="current" class="h4"><u>Current Use</u></th>
              <th id="future" class="h4"><u>Future Use</u></th>
            </tr>
          </thead>
            <tbody class="sites">
              <?php
                $conn = mysqli_connect("localhost","titanjohn","bull1607","titanJohn") or die ("Error".mysqli_error($conn));

                $result = mysqli_query($conn,"SELECT * FROM siteManage");
                $all_property = array();

                while ($property = mysqli_fetch_field($result)) {
                  array_push($all_property, $property->name);
                }

                while ($row = mysqli_fetch_array($result)) {

                  echo '<tr>';
                  foreach ($all_property as $item) {

                    if($row[0] == $row[$item]){
                      echo '<td class="idCol" id="' . $row[0] . '">' . $row[$item] . '</td>';
                    } else {
                      echo '<td contenteditable="true" id="' . $row[0] . '">' . $row[$item] . '</td>';
                    }
                  }
                  echo '</tr>';
                }


                mysqli_close($con);
                ?>

            </tbody>
        </table>
      </div>
    </body>

</html>
