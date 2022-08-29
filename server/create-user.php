<?php

require "database.php";

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$jobId = $_POST['jobId'];

$sql = "INSERT INTO users(name, email, phone, job_id) VALUES ('{$name}', '{$email}', '{$phone}', $jobId)";

query($sql);