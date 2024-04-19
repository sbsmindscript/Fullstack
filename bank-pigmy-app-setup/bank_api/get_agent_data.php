<?php
include("config.php");

//create an array
  $userinfo = array();
 
if($_SERVER["REQUEST_METHOD"] == "POST")
{	
    $email=$_POST['email'];
  
    $sql="SELECT * FROM agents WHERE email_id='$email' AND agent_status=1";

    $result = $conn->query($sql)or die("Error in Selecting " . mysqli_error($conn));

if ($result->num_rows > 0) {    
while($row = $result->fetch_assoc()) {
    $userinfo[] = $row;	
    $userinfo[] = "Success";
}
} else {
$userinfo[] ="Sorry";	
}

echo json_encode($userinfo);
}

$conn->close();
?>
