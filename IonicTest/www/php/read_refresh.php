<?php
$json = file_get_contents('php://input');
echo file_put_contents('http://applab.ai.ru.nl:8080/ateam/database/personen', $json);
?>