<?php
include("config.php");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
//create an array
  $memberinfo = array();
  
if($_SERVER["REQUEST_METHOD"] == "POST")
{
    $filename = $_FILES['image']['name'];

     $valid_ext = array('png','jpeg','jpg');

     $photoExt1 = @end(explode('.', $filename));
     $phototest1 = strtolower($photoExt1);

     $new_profle_pic = time().'.'.$phototest1;

     $location = "upload/".$new_profle_pic;

     $file_extension = pathinfo($location, PATHINFO_EXTENSION);
     $file_extension = strtolower($file_extension);

       $cust_name= $_POST['cust_name'];
       $location = $_POST['location'];
       $mobile_no = $_POST['mob'];
       $business_name = $_POST['business_name'];
       $business_proof = $_POST['business_proof'];
       $under_agent_email=$_POST['agent_email'];
       $agent_id=$_POST['agent_id']; 
      date_default_timezone_set('Asia/Kolkata');      
      $reg_date=date('d-m-Y');

if(in_array($file_extension,$valid_ext)){  
  compressedImage($_FILES['image']['tmp_name'],$location,60);
  
  $sql="INSERT INTO customers(image,cust_name,location,under_agent_email,agent_id,mobile_no,bussiness_name,bussiness_proof,registration_date) VALUES('$new_profle_pic','$cust_name','$location','$under_agent_email','$agent_id','$mobile_no','$business_name','$business_proof','$reg_date')";

  $result = $conn->query($sql)or die("Error in Selecting " . mysqli_error($conn));

  if ($result) {    
        $memberinfo[] ="Success"; 
  } else {
    $memberinfo[] ="Sorry"; 
  }
  echo json_encode($memberinfo);  

}
else{
$memberinfo[] ="Sorry"; 
} 

}

function compressedImage($source, $path, $quality) {

$info = getimagesize($source);

if ($info['mime'] == 'image/jpeg') 
   $image = imagecreatefromjpeg($source);

    elseif ($info['mime'] == 'image/gif') 
    $image = imagecreatefromgif($source);

    elseif ($info['mime'] == 'image/png') 
    $image = imagecreatefrompng($source);

    imagejpeg($image, $path, $quality);

    }
$conn->close();
?>