<?php
$username = $_GET['username']; //in php werk je altijd met de name attribuut
//echo $username; echo = schrijf iets op je pagina en schrijf het terug
$favdate = 'zondag';
if(isset($_GET['favdate']))
?>

!<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>formulieren</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <h1>Welkom<?=$username ?></h1>
    <p>Je favoriete weekdag is <?=$favdate ?></p>
</body>
</html>