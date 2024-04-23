<?php
include("config.php");

//create an array
  $userinfo = array();
 
if($_SERVER["REQUEST_METHOD"] == "POST")
{	 
   

    $from_dt = date('d-m-Y', strtotime($_POST['from_dt']));
    $to_date = date('d-m-Y', strtotime($_POST['to_date']));
    
    $sql="SELECT * FROM savings WHERE entry_date BETWEEN '$from_dt' AND '$to_date'";

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
