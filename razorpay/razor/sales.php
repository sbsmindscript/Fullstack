<?php

session_start();

if(isset($_GET['pay'])){

        $razorpay_tras_id = $_GET['pay'];

        $name=$_SESSION['nn'];
        $mb=$_SESSION['mymob'];
		$email=$_SESSION['mye'];
		$cost=$_SESSION['p'];

		$con=mysqli_connect("localhost","root","","bank");

		$save_data=mysqli_query($con,"INSERT INTO transaction(name,contactno,email,amount,trans_id) VALUES('$name','$mb','$email','$cost','$razorpay_tras_id')");

		echo "transaction is successful";

		session_destroy();

    }
    else{
    	header("location:index.php");
    }

?>