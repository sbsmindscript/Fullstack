<?php
include("config.php");

  $loaninfo = array();
  
$_POST = json_decode(file_get_contents('php://input'), true);


if($_SERVER["REQUEST_METHOD"] == "POST")
{

 $id=$_POST['id']; 
 $acc_no=$_POST['acc_no']; 
 $cust_name=$_POST['cust_name']; 
 $amounts=$_POST['amounts']; 
 $change_request=1;

  $sql="UPDATE savings SET cust_account_no='$acc_no', customer_full_name='$cust_name',amount='$amounts',change_request='$change_request' WHERE saving_id='$id' ";

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
