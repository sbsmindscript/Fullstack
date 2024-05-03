<?php
include("config.php");

//create an array
  $userinfo = array();
 
if($_SERVER["REQUEST_METHOD"] == "POST")
{	
    $agent_mail=$_POST['email'];
    date_default_timezone_set('Asia/Kolkata');   

	$entry_date = date('Y-m-d'); 
    
    $sql="SELECT * FROM savings WHERE agent_email='$agent_mail' AND entry_date='$entry_date'";

    $result = $conn->query($sql)or die("Error in Selecting " . mysqli_error($conn));

	if ($result) {    
        while($row=$result->fetch_assoc()){
			$userinfo[]=$row;
		}
		
	} else {
		$userinfo[] ="Sorry";	
	}
	
	echo json_encode($userinfo);
}

$conn->close();
?>
