<?php
$userNum = $_REQUEST['zhanghao'];
$psdNum = $_REQUEST['mima'];
$con = mysql_connect("localhost","root","root");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("cusx", $con);
$result = mysql_query("SELECT * FROM zhuce WHERE xuehao='$userNum' AND password='$psdNum'");
// $row=mysql_num_rows($result);
$row=mysql_fetch_assoc($result);
if($row!=null){
	echo "1";
}else{
	echo "2";
}
mysql_close($con);
?>