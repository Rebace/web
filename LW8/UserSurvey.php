<?php

function getPostParameter(string $name): ?string
{
    return isset($_POST[$name]) ? $_POST[$name] : null;
}

$firstName = getPostParameter('first_name');
$email = getPostParameter('email');
$activity = getPostParameter('activity');
$agreement = getPostParameter('agreement');


if (empty($agreement))
{
	echo "Согласитесь с пользовательским соглашением";
	die();
}

if (empty($email))
{
	echo "Почта не указана";
	die();
}

$file = "data/" . $email . ".txt";

if (file_exists($file))
{
	$tempArray = file($file);
	if (!(empty($firstName)))
	{
		$tempArray[0] = "First Name: $firstName\n";
	}

	if (!(empty($activity)))
	{
		$tempArray[2] = "Activity: $activity";
	}

	file_put_contents($file, $tempArray);
} 
else
{
	$userTxt = fopen($file, "w");
	fwrite($userTxt, "First Name: $firstName\n");
	fwrite($userTxt, "Email: $email\n");
	fwrite($userTxt, "Activity: $activity");
	fclose($userTxt);
}

$tempArray = file($file);
for ($i = 0; $i < 3; $i++)
{
	echo "$tempArray[$i] <br />";
}
?>