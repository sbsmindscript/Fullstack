<?php
include("config.php");

//create an array
  $userinfo = array();
 
if($_SERVER["REQUEST_METHOD"] == "POST")
{	
    $agent_mail=$_POST['email'];
    
    $sql="SELECT * FROM savings WHERE agent_email='$agent_mail' ORDER BY saving_id DESC";

    $result = $conn->query($sql)or die("Error in Selecting " . mysqli_error($conn));

if ($result->num_rows > 0) {    
while($row = $result->fetch_assoc()) {
    $userinfo[] = $row;	
}
} else {
$userinfo[] ="No record found";	
}

echo json_encode($userinfo);
}

$conn->close();
?>
