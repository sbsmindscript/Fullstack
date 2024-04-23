<?php
include("config.php");

  $categorys = array();
  
if($_SERVER["REQUEST_METHOD"] == "POST")
{
	
	$id=$_POST['id'];

    $sql="SELECT * FROM savings WHERE saving_id='$id'";

    $result = $conn->query($sql)or die("Error in Selecting " . mysqli_error($conn));

	if ($result) {    
        while($row=$result->fetch_assoc()){
			$categorys[]=$row;
		}
		
	} else {
		$categorys[] ="Sorry";	
	}
	
	echo json_encode($categorys);
}

$conn->close();
?>

