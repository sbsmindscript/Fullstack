<?php
include("config.php");
$unitarr = array();
$_POST = json_decode(file_get_contents('php://input'), true);

if($_SERVER["REQUEST_METHOD"] == "POST")
{
   $customer_name = $_POST['customer_name'];
   $location = $_POST['location'];
   $mobile_no = $_POST['mobile_no'];
   $bussiness_name = $_POST['bussiness_name'];
   $bussiness_proof = $_POST['bussiness_proof'];
   $agent_id=$_POST['agent_id']; 
   $sql="INSERT INTO customers(customer_name,location,mobile_no,bussiness_name,bussiness_proof)VALUES ('$customer_name','$location','$mobile_no','$bussiness_name','$bussiness_proof')";

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