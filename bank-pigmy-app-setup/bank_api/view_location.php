<?php
include("config.php");

  $catinfo = array();
  
if($_SERVER["REQUEST_METHOD"] == "GET")
{
	
	$sql="SELECT * FROM location";

    $result = $conn->query($sql)or die("Error in Selecting " . mysqli_error($conn));

	if ($result) {    
        while($row=$result->fetch_assoc()){
			$catinfo[]=$row;
		}
		
	} else {
		$catinfo[] ="Sorry";	
	}
	
	echo json_encode($catinfo);
}

$conn->close();
?>
