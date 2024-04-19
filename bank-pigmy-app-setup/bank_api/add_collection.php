<?php
include("config.php");

//create an array
  $unitarr = array();
  
// Getting posted data and decodeing json
$_POST = json_decode(file_get_contents('php://input'), true);


if($_SERVER["REQUEST_METHOD"] == "POST")
{

	$cust_accno=$_POST['cust_accno'];

	$customer_name=$_POST['customer_name'];

	$agent_id=$_POST['agent_id']; 

	$agent_email=$_POST['agent_email'];	

	$latitude=$_POST['latitude'];

	$longitude=$_POST['longitude'];

	$amount=$_POST['amount'];

	date_default_timezone_set('Asia/Kolkata');   

	$entry_date = date('Y-m-d');
	
	$sql="INSERT INTO savings(cust_account_no,customer_full_name,agent_id,agent_email,latitude,longitude,amount,entry_date)VALUES ('$cust_accno','$customer_name','$agent_id','$agent_email','$latitude','$longitude','$amount','$entry_date')";

    $result = $conn->query($sql)or die("Error in Selecting " . mysqli_error($conn));

	if ($result) {    
        $unitarr[] ="Success";	
	} else {
		$unitarr[] ="Sorry";	
	}
	
	echo json_encode($unitarr);
}

$conn->close();
?>
