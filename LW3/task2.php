<?php

if (!(empty($_GET['identifier'])))
    $String = $_GET['identifier'];

if (empty($String))
    echo "no identifier";
else
{
    if (!(is_numeric($String[0])))
    {
        for ($i = 0; $i < strlen($String); $i++)
        {
            if ((!(is_numeric($String[$i]))) and (!(ctype_alpha($String[$i]))))
            {
                echo "no";
                return;
            }
        }
        echo "yes";
    }
    else
        echo "no";
}