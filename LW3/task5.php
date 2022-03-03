<?php

function getGetParameter($name)
{
    return isset($_GET[$name]) ? $_GET["$name"] : null;
}

$email = getGetParameter('email');

if (empty($email))
	return;

$file = "data/" . $email . ".txt";
if ((!(empty($email))) and (file_exists($file)))
{
    $tempArray = file($file);
    for ($i = 0; $i < 4; $i++)
    {
        echo $tempArray[$i] . "<br />";
    }
}