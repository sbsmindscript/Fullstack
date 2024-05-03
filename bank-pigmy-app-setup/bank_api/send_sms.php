<?php

  $_POST = json_decode(file_get_contents('php://input'), true);

if($_SERVER["REQUEST_METHOD"] == "POST")
{

  $name=$_POST['cname'];
  
  $mobile=$_POST['mb'];
    
  $message="Hello: $name"."\r\n"."Registration Successfully."."\r\n"."From Bank name";

 $fields = array(
                "language" => "english",
                "route" => "q",
                "numbers" => $mobile,
                "message" => $message
);

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://www.fast2sms.com/dev/bulkV2",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_SSL_VERIFYHOST => 0,
  CURLOPT_SSL_VERIFYPEER => 0,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => json_encode($fields),
  CURLOPT_HTTPHEADER => array(
    "authorization: YOUR_API_KEY",
    "accept: */*",
    "cache-control: no-cache",
    "content-type: application/json"
  ),
));

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


