<?php
$Num = $_REQUEST['del'];
$con = mysql_connect("localhost","root","root");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("cusx", $con);
$result = mysql_query("DELETE FROM massage WHERE ID=$Num");

mysql_close($con);
?>