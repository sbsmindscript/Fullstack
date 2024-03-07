<!DOCTYPE html>
<html>
<head>
	<title>View Saving Account Information</title>
</head>
<body>

	<center>

	<table border="1">
		<tr>
		  <th>First Name</th>
  		  <th>Middle Name</th>
  		  <th>Last Name</th>
  		  <th>Mobile No</th>
		</tr>

		<?php
	$con=mysqli_connect("localhost","root","","bank");

 	$query=mysqli_query($con,"SELECT * FROM saving_account");

	while($data=mysqli_fetch_array($query)){
		?>

		<tr>
			<th><?php echo $data['first_name'];?></th>
			<th><?php echo $data['middle_name'];?></th>
			<th><?php echo $data['last_name'];?></th>
			<th><?php echo $data['mobile_number'];?></th>			
		</tr>

		<?php } ?>
		
		</table>
	</center>

</body>
</html>


