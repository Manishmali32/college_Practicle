<?php 

$number=121;
$temp=$number;
$reverse=0;

while ($temp>0)
    {
        $digit=$temp%10;
        $reverse=($reverse*10)+$digit;
        $temp=(int)($temp/10);

    }

    if($number==$reverse)
        {
            echo "givem number is palindrome";

        }
        else {
            echo "Given number is not palindrome";
        }


?>