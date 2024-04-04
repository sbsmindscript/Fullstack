<?php
include("config.php");

//create an array
  $loaninfo = array();
  
// Getting posted data and decodeing json
//$_POST = json_decode(file_get_contents('php://input'), true);


if($_SERVER["REQUEST_METHOD"] == "POST")
{
	//username and password sent from Form
	$id=$_POST['id']; 
	
	
  $sql="DELETE FROM admin WHERE id='$id'";


    $result = $conn->query($sql)or die("Error in Selecting " . mysqli_error($conn));

	if ($result) {    
        $loaninfo[] ="Success";	
	} else {
		$loaninfo[] ="Sorry";	
	}
	
	echo json_encode($loaninfo);
}

$conn->close();
?>
