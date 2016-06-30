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

$sql="INSERT INTO massage (PERSONNAME,PERSONXIBIE,PERSONCLASS,PERSONE_MAIL,PERSONPHONE,MAINSEND,MAIN)
VALUES
('$_POST[PERSONNAME]','$_POST[PERSONXIBIE]','$_POST[PERSONCLASS]','$_POST[PERSONE_MAIL]','$_POST[PERSONPHONE]','$_POST[MAINSEND]','$_POST[MAIN]')";

if (!mysql_query($sql,$con))
{
    die('Error: ' . mysql_error());
}
//echo "1 record added";
mysql_close($con)
?>