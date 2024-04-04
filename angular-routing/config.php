<?php
header('Access-Control-Allow-Origin: *');  

define('DB_SERVER', 'localhost'); 
define('DB_USERNAME', 'root'); 
define('DB_PASSWORD', ''); 
define('DB_DATABASE', 'routing');  
$conn = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE)or die("Error in Selecting " . mysqli_error($conn));;
?>