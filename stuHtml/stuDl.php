<?php
$userNum = $_REQUEST['zhanghao'];
$psdNum = $_REQUEST['mima'];
$con = mysql_connect("localhost","root","root");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("cusx", $con);
$result = mysql_query("SELECT * FROM zhuce WHERE xuehao=$userNum AND password=$psdNum");

mysql_close($con);
?>