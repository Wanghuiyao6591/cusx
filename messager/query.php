<?php
header("Content-Type:text/html;charset-utf-8");
$con = mysql_connect("localhost","root","root");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("cusx", $con);

$result = mysql_query("SELECT * FROM liuyan");
$arr=array();
while(($row = mysql_fetch_array($result))!=null)
  {
  	$arr[]=$row;
  }
 for($i=0;$i<count($arr);$i++){
 	$r=$arr[$i];
 	echo "<div class='list'>";
 	echo "<li>$r[id]</li>";
 	echo "<li>$r[textarea]</li>";
 	echo "<li id='shenhe'>未审核</li>";
 	echo "<li class='li'>x</li>";
 	echo "</div>";
 }
mysql_close($con);
?>