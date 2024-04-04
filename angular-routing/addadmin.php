<?php
include("config.php");

//create an array
  $categoryres = array();
  
// Getting posted data and decodeing json
$_POST = json_decode(file_get_contents('php://input'), true);


if($_SERVER["REQUEST_METHOD"] == "POST")
{
	//username and password sent from Form	
	$user=$_POST['names']; 	
	$mypass=$_POST['pass'];
	
	$sql="INSERT INTO admin(username,password)VALUES ('$user','$mypass')";

    $result = $conn->query($sql)or die("Error in Selecting " . mysqli_error($conn));

	if ($result) {    
        $categoryres[] ="Success";	
	} else {
		$categoryres[] ="Sorry";	
	}
	
	echo json_encode($categoryres);
}

$conn->close();
?>
