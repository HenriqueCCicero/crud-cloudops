<?php


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