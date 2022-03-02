<?php

if (empty($_GET['password']))
{
    return;
}

$password = $_GET['password'];
$length = strlen($password);
$reliability = 0;
$n = 0;

if (!(ctype_alnum($password)))
    echo "The string $password is not a password";
else
{
    $reliability += 4*$length; //колличество

    for ($i = 0; $i < $length; $i++)  //цифры
        if (is_numeric($password[$i])) 
            $n++;		
    $reliability += $n*4;
    $n = 0;

    for ($i = 0; $i < $length; $i++)  //символы в верхнем регистре
    {
        if (ctype_upper($password[$i])) 
        {
            $n++;			
        }
    }
    if ($n != 0) 
    {
        $reliability += ($length - $n)*2;
    }
    $n = 0;

    for ($i = 0; $i < $length; $i++) //символы в нижнем регистре
    {
        if (ctype_lower($password[$i])) 
        {
            $n++;	
        }
    }
    if ($n != 0) 
    {
        $reliability += ($length - $n)*2;
    }
    $n = 0;

    if (ctype_alpha($password)) //если пароль только из букв
    {
        $reliability -= $length;			
    }
    if (ctype_digit($password)) //если пароль только из цифр
    {
        $reliability -= $length;			
    }
    $result = count_chars($password); //возвращает информацию о символах используемых в пароле
    foreach ($result as $val) 
    {
        if ($val > 1) 
        {
            $reliability -= $val;
        }
    }	
    echo "The reliability of your password $reliability";
}