<?php

if(isset($_POST['current_info'])){

    $b_name = $_POST['business_name'];
    $b_category = $_POST['business_category'];
    $b_no_type = $_POST['business_card_type'];
    $b_no = $_POST['business_number'];
    $o_name = $_POST['owner_name'];
    $o_pan = $_POST['owner_pan'];
    $o_aadhar = $_POST['owner_aadhar'];
    // $services[] = [$_POST['cheque_book'],$_POST['atm_card'],$_POST['credit_card']];

    $con = mysqli_connect("localhost", "root", "", "bank");

    $query = mysqli_query($con, "INSERT INTO current_account(business_name,business_category,business_no,b_no,owner_name,owner_pan,owner_aadhar) VALUES('$b_name','$b_category','$b_no_type',' $b_no','$o_name','$o_pan','$o_aadhar')");

    if($query="TRUE"){
        header("location:current.html");
    }else{
        echo"error";
    }
}else{
    echo"button is not set";
}


?>