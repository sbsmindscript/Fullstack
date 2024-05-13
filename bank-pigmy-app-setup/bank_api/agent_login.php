<?php
include("config.php");

//create an array
  $loaninfo = array();
  
// Getting posted data and decodeing json
$_POST = json_decode(file_get_contents('php://input'), true);


if($_SERVER["REQUEST_METHOD"] == "POST")
{
	 
	$email=$conn->real_escape_string($_POST['username']);
	$pass=$conn->real_escape_string($_POST['password']); 
	
 $sql="SELECT * FROM agents WHERE email_id='$email' AND auth_password='$pass' ";    //general sql statement

   $result = $conn->query($sql)or die("Error in Selecting " . mysqli_error($conn));   //query fire here//

	if ($result ->num_rows > 0) { 
	while($row= $result->fetch_assoc()){
		$loaninfo[]=$row;  //data fetch
		$loaninfo['STATUS']="Success";
	}   
       // $loaninfo[] ="Success";

	} else {
		$loaninfo['STATUS'] ="INVALID";	
	}
	
	echo json_encode($loaninfo);
}

$conn->close();
?>
