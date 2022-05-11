<?php

function getPostParameter(string $name): ?string
{
    return isset($_POST[$name]) ? $_POST[$name] : null;
}

$email = getPostParameter('email');

if (empty($email))
{
    echo 'Введите email';
	die();
}

$file = '../data/' . $email . '.txt';
if (file_exists($file))
{
    $tempArray = file($file);
    for ($i = 0; $i < 3; $i++)
    {
        echo "<div> $tempArray[$i] </div>";
    }
}
else
{
    echo 'Данного файла не существует';
}