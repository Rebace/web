<?php
header('Content-type: application/json');

$inputJSON = file_get_contents('php://input');
$input = json_decode($inputJSON, true);

$email = $input['email'];
$name = $input['name'];
$activity = $input['activity'];
$agreement = $input['agreement'];

$file = "../data/" . strtolower($email) . ".txt";

try
{
	if (file_exists($file))
	{
		$tempArray = file($file);
		if (!(empty($name)))
		{
			$tempArray[0] = "Name: $name\n";
		}

		if (!(empty($activity)))
		{
			$tempArray[2] = "Activity: $activity";
		}

		file_put_contents($file, $tempArray);
	} 
	else
	{
		$userTxt = @fopen($file, "w");
		if (!$userTxt) {
			throw new Exception(`File is none`);
		}
		fwrite($userTxt, "Name: $name\n");
		fwrite($userTxt, "Email: $email\n");
		fwrite($userTxt, "Activity: $activity");
		fclose($userTxt);
	}

	$response = array('status' => 200, 'message' => 'OK');
	echo json_encode($response);
}
catch (Exception $e)
{
	$response = array('status' => 500, 'message' => 'Fine is none');
	echo json_encode($response);
}
?>