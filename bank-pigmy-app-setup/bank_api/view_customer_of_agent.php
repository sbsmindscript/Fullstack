<?php
include("config.php");

//create an array
  $userinfo = array();
 
if($_SERVER["REQUEST_METHOD"] == "POST")
{	
    $agent_mail=$_POST['email'];
    
    $sql="SELECT * FROM customers WHERE under_agent_email='$agent_mail'";

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
