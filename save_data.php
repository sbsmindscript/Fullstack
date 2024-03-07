<?php

if(isset($_POST['save_info'])){

$a=$_POST['first_name'];
$b=$_POST['middle_name'];
$c=$_POST['last_name'];

$mb=$_POST['mobile_number'];
$dob=$_POST['dob'];
$gender=$_POST['gender'];

$n=$_POST['nationality'];
$cn=$_POST['countryname'];
$idp=$_POST['id_proof'];

$address=$_POST['address'];
$post_code=$_POST['pincode'];
$services=$_POST['requiredServices'];

$con=mysqli_connect("localhost","root","","bank");

 $query=mysqli_query($con,"INSERT INTO saving_account(first_name,middle_name,last_name,mobile_number,dob,gender,nationality,countryname,id_proof,address,pincode,requiredServices) VALUES('$a','$b','$c','$mb','$dob','$gender','$n','$cn','$idp','$address','$post_code','$services')");

 if($query="TRUE"){
 	header("location:savings.html");
 }
 else{
 	echo "error";
 }


}
else{
	echo "Button is not set";
}

?>