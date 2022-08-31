<?php

require "database.php";

$sql = "SELECT  u.id, u.name, u.email, u.phone, j.name as job 
        FROM users as u 
        LEFT JOIN user_jobs as uj on uj.user_id = u.id
        LEFT JOIN jobs as j on uj.job_id = j.id";

$users = query($sql);

$data = [];
foreach($users as $user){
  if(empty($data[$user["id"]])){
    $data[$user["id"]] = $user;
    $data[$user["id"]]["jobs"] = [];
  }
  $data[$user["id"]]["jobs"][] = $user["job"];
}
sort($data);

echo json_encode($data);