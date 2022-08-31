<?php

require "database.php";
var_dump($_POST);
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$jobs = $_POST['jobs'];

$sql = "INSERT INTO users(name, email, phone) VALUES ('{$name}', '{$email}', '{$phone}')";
query($sql);

$sql = "SELECT id FROM users ORDER BY id DESC LIMIT 1";
$userId = query($sql)[0]["id"];

foreach($jobs as $jobId){
  $sql = "INSERT INTO user_jobs(user_id, job_id) VALUES ({$userId}, {$jobId})";
  query($sql);
}

