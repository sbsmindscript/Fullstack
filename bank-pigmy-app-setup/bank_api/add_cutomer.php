<?php
include("config.php");
$unitarr = array();
$_POST = json_decode(file_get_contents('php://input'), true);

if($_SERVER["REQUEST_METHOD"] == "POST")
{
   $cust_name= $_POST['cust_name'];
   $location = $_POST['location'];
   $mob = $_POST['mob'];
   $business_name = $_POST['business_name'];
   $business_proof = $_POST['business_proof'];
   $agent_id=$_POST['agent_id']; 
   $sql="INSERT INTO customers(cust_name,location,mobile_no,bussiness_name,bussiness_proof,under_agent_id)VALUES ('$cust_name','$location','$mob','$business_name','$business_proof','$agent_id')";

   $result = $conn->query($sql)or die("Error in Selecting " . mysqli_error($conn));

	if ($result) {    
        $unitarr[] ="Success";	
	} else {
		$unitarr[] ="Sorry";	
	}
	
	echo json_encode($unitarr);

    $conn->close();


}
?>