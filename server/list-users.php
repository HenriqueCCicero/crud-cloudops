<?php

require "database.php";

$sql = "SELECT * FROM users";
$users = query($sql);

echo json_encode($users);