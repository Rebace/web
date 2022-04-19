<?php

function getGetParameter(string $name): ?string
{
    return isset($_GET[$name]) ? $_GET[$name] : null;
}

$email = getGetParameter('email');

if (empty($email))
{
	die();
}

$file = '../data/' . $email . '.txt';
if ((!(empty($email))) and (file_exists($file)))
{
    $tempArray = file($file);
    for ($i = 0; $i < 3; $i++)
    {
        echo "$tempArray[$i] <br />";
    }
}
else
{
    echo 'Данного файла не существует';
}