<?php
include("config.php");

  $catlist = array();
  

if($_SERVER["REQUEST_METHOD"] == "GET")
{
	
	
	$sql="SELECT * FROM admin";

    $result = $conn->query($sql)or die("Error in Selecting " . mysqli_error($conn));

	if ($result) {    
        while($row=$result->fetch_assoc()){
			$catlist[]=$row;
		}
		
	} else {
		$catlist[] ="Sorry";	
	}
	
	echo json_encode($catlist);
}

$conn->close();
?>
