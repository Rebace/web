<?php

if (!(empty($_GET['first_name'])))
    $firstName = $_GET['first_name'];
else
    $firstName = ""; 

if (!(empty($_GET['last_name'])))
    $lastname = $_GET['last_name'];
else
    $lastname = ""; 

if (!(empty($_GET['email'])))
    $email = $_GET['email'];
else
    return;

if (!(empty($_GET['age'])))
    $age = $_GET['age'];
else
    $age = ""; 

$file = "data/" . $email . ".txt";

if (strlen($email) > 0)
{
	if (file_exists($file))
	{
		$tempArray = file($file);
		if (!(empty($firstName)))
			$tempArray[0] = "First Name: " . $firstName . "\n";

		if (!(empty($lastName)))
			$tempArray[1] = "Last Name: " . $lastName . "\n";

		if (!(empty($age)))
			$tempArray[3] = "Age: " . $age;

		file_put_contents($file, $tempArray);
	} 
    else
	{
		$userTxt = fopen($file, "w");
		fwrite($userTxt, "First Name: " . $firstName . "\n");
		fwrite($userTxt, "Last Name: " . $lastName . "\n");
		fwrite($userTxt, "Email: " . $email . "\n");
		fwrite($userTxt, "Age: " . $age);
		fclose($userTxt);
	}
}
?>