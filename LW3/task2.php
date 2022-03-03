<?php

function getGetParameter($name): ?string
{
    return isset($_GET[$name]) ? $_GET["$name"] : null;
}

$String = getGetParameter('identifier');

if (empty($String))
    echo "no identifier";
else
{
    if (!(is_numeric($String[0])))
    {
        for ($i = 0; $i < strlen($String); $i++)
        {
            if (!((is_numeric($String[$i])) or (ctype_alpha($String[$i]))))
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