<?php
include("config.php");

  $categorys = array();
  
if($_SERVER["REQUEST_METHOD"] == "POST")
{
	$contact_no=$_POST['mobilenumber']; 	
	
	$sql="SELECT * FROM customers WHERE mobile_no='$contact_no'";

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
