<?php

if (!(empty($_GET['email'])))
    $email = $_GET['email'];
else
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