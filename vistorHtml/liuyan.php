<?php
$con = mysql_connect("localhost","root","root");
if (!$con)
{
    die('Could not connect: ' . mysql_error());
}
mysql_query("SET NAMES 'UTF8'");
mysql_query("SET CHARACTER SET UTF8");
mysql_query("SET CHARACTER_SET_RESULTS=UTF8'");

mysql_select_db("cusx", $con);

$sql="INSERT INTO liuyan (textarea)
VALUES
('$_POST[textarea]')";

if (!mysql_query($sql,$con))
{
    die('Error: ' . mysql_error());
}
mysql_close($con)
?>