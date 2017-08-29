<?php
$user = json_decode(file_get_contents('php://input'), true);
  
if(isset($user['name']) && isset($user['age']))
{
    $user['age'] = $user['age']+10;
    echo json_encode($user);
}
else
{  
    echo "веденные данные некорректны";
}
?>