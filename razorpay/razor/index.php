<?php

session_start();

$payment=1;

$_SESSION['p']=$payment;

// prefill the below value for razorpay
$name="balu";
$email="balu.swt@gmail.com";
$mob="8329625489";

//dynamic value  for db insert operations

$myname="Balu";
$_SESSION['nn']=$myname;

$mymobile="8329625489";
$_SESSION['mymob']=$mymobile;

$myemail="balu.swt@gmail.com";
$_SESSION['mye']=$myemail;


?>


<!DOCTYPE html>
<html>
<head>
	<title>Razorpay</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

<!-- jQuery library -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body class="container">

	<br><br>
  <form class="form-group" method="post">
  	<div class="col-md-2">
      <input type="hidden" name="user_name" value="<?php echo $myname;?>">
      <input type="hidden" name="mobileno" value="<?php echo $mymobile;?>">
      <input type="hidden" name="myemail" value="<?php echo $myemail;?>">
     <!--  <label>Payment ID</label> -->

		<input type="hidden" name="productId" id="productId" value="<?php echo rand(1231,7879);?>">
	</div>
		<div class="col-md-2">
        <label>Total Amount</label>
        <input type="hidden" name="price" id="price" value="<?php echo $payment;?>" class="rupee" readonly>
          <h3>Your total Payable amount is: <?php echo $payment;?></h3>
        </div>
        <br><br>
        <input type="button" value="pay now" id="payButton" onclick="razorpay()" class="btn btn-success">
	</form>	

</body>
</html>

<script src="https://checkout.razorpay.com/v1/checkout.js"></script>


<script type="text/javascript">
    
function razorpay(){

var amount=document.getElementById("price").value;

var total = amount * 100;

var options = {
    "key": "AAAAAABBBB",  //live key from razorpay
    "amount": total, // Example: 2000 paise = INR 20
     "name": "Bhartiya Sangeet Kalapith",
     "description": "Registation Fees",
    "image": "https://kalapith.org/images/omkarlogo.png",
    "handler": function (transaction,response) {
        console.log(response);
        window.location = 'sales.php?pay='+transaction.razorpay_payment_id;
    },
    "prefill": {
         "name": '<?php echo $name;?>', // pass customer name
         "email": '<?php echo $email;?>',// customer email
         "contact": '<?php echo $mob;?>' //customer phone no.
    },
    "notes": {
        "address": "address" //customer address 
    },
    "theme": {
        "color": "#15b8f3" // screen color
    }
};
console.log(options);
var propay = new Razorpay(options);
propay.open();


}

</script>