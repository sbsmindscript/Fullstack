<?php
include("config.php");

  $categorys = array();
  
if($_SERVER["REQUEST_METHOD"] == "POST")
{
	$email_id=$_POST['agent_own_email']; 	
	
	$sql="SELECT * FROM agents WHERE email_id='$email_id' AND agent_status=0";

    $result = $conn->query($sql)or die("Error in Selecting " . mysqli_error($conn));

	if ($result) {    
        while($row=$result->fetch_assoc()){
			$categorys[]="Success";
		}
		
	} else {
		$categorys[] ="Sorry";	
	}
	
	echo json_encode($categorys);
}

$conn->close();
?>
