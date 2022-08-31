<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: token, Content-Type, X-Requested-With');
$_POST = json_decode(file_get_contents("php://input"),true);

function query(string $sql): array {
    $dbType = 'mysql';
    $dbHost = '127.0.0.1';
    $dbName = 'crud_cloudops';
    $dbPort = 3306;
    $dbUser = 'root';
    $dbPassword = '';

    $conn = new PDO($dbType . ':host=' . $dbHost . ';port=' . $dbPort . '; dbname=' . $dbName, $dbUser, $dbPassword);

    $stmt = $conn->prepare($sql);
    $stmt->execute();
    return $stmt->fetchAll(PDO::FETCH_ASSOC);
}