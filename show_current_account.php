<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Current Account Dat</title>
    <style>
        table tr{
            border: 1px solid black;
        }
    </style>

</head>
<body>
    <center>
    <table border = "1">
        <tr>
            <!-- <th>ID</th> -->
            <th>Business Name</th>
            <th>Business Category</th>
            <th>Business Number Type</th>
            <th>Business Number</th>
            <th>Owner Name</th>
            <th>Owner PAN</th>
            <th>Owner Aadhar</th>
        </tr>
            <?php
                $con = mysqli_connect("localhost", "root", "", "bank");
                $query = mysqli_query($con, "SELECT * FROM current_account");
                while($data = mysqli_fetch_array($query)){
            ?>
            <tr>
                <td><?php echo $data['business_name'];?></td>
                <td><?php echo $data['business_category'];?></td>
                <td><?php echo $data['business_no'];?></td>
                <td><?php echo $data['b_no'];?></td>
                <td><?php echo $data['owner_name'];?></td>
                <td><?php echo $data['owner_pan'];?></td>
                <td><?php echo $data['owner_aadhar'];?></td>
                
            </tr>
            
            <?php } ?>
  
    </table>
    </center>
</body>
</html>