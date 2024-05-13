<?php

$_POST = json_decode(file_get_contents('php://input'), true);

if($_SERVER["REQUEST_METHOD"] == "POST"){

$name=$_POST['cname'];
  
$contactno=$_POST['mb'];
    
$message="Hello Balu";

$username="balu1991";

$password="Asus551lb@";

$message="Hello Balu";

$sender="BLKSMS"; //ex:INVITE

$mobile_number="8329625489";

$url="http://api.bulksmsgateway.in/sendmessage.php?user=".urlencode($username)."&password=".urlencode($password)."&mobile=".urlencode($mobile_number)."&message=".urlencode($message)."&sender=".urlencode($sender);

$curl = curl_init($url);

curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$response = curl_exec($curl);

$err = curl_error($curl);

curl_close($curl);

if ($err) {
     echo "cURL Error #:" . $err;
} else {
   echo $response;

}
}
?>