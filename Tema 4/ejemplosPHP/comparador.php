<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    $n1=intval($_GET['valor1']);
    $n2=intval($_GET['valor2']);
    if ($n1>$n2){
    echo "El número mayor es (".$n1.")";
    }
    else{
    echo "El número mayor es (".$n2.")";
    }
    ?>
</body>
</html>





