<?php

  include("config.php");
 
  $data = json_decode(file_get_contents("php://input"));
  
  $loaninfo = array();
 
  foreach ($data as $key => $value) {
    $sql = "DELETE FROM admin WHERE id = '".$value."'";
    $result = $conn->query($sql)or die("Error in Selecting " . mysqli_error($conn));
  }
 
 if ($result) {    
        $loaninfo[] ="Success"; 
  } else {
    $loaninfo[] ="Sorry"; 
  }
  
  echo json_encode($loaninfo);
?>