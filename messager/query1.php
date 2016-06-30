<?php
header("Content-Type:text/html;charset-utf-8");
$con = mysql_connect("localhost","root","root");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("cusx", $con);

$result = mysql_query("SELECT * FROM massage");
$arr=array();
while(($row = mysql_fetch_array($result))!=null)
  {
  	$arr[]=$row;
  }
 for($i=0;$i<count($arr);$i++){
 	$l=$arr[$i];
 	echo "<div class='list'>";
 	echo "<li>$l[ID]</li>";
 	echo "<li>$l[PERSONNAME]</li>";
 	echo "<li>$l[PERSONE_MAIL]</li>";
 	echo "<li>$l[PERSONPHONE]</li>";
 	echo "<li class='h'>$l[MAINSEND]</li>";
 	echo "<li class='w'>$l[MAIN]</li>";
 	echo "<li class='li'>x</li>";
 	echo "</div>";
 }
mysql_close($con);
?>