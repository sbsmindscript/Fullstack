<?php
include("config.php");

//create an array
  $userinfo = array();
 
if($_SERVER["REQUEST_METHOD"] == "POST")
{	 

    $agent_email=$_POST['email'];
    $agent_id=$_POST['agent_id'];
    $account_no=$_POST['account_no'];
    
    $sql="SELECT * FROM savings WHERE agent_email='$agent_email' AND agent_id='$agent_id' AND cust_account_no='$account_no' ORDER BY saving_id desc";

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
