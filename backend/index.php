<?php
error_reporting(E_ALL);

ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Content-Type: text/html; charset=utf-8');

session_start();
ob_start();

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case "GET":
        getProcess();
        break;
    case "POST":
        postProcess();
        break;
}

function getProcess(){
    include "db.php";
    $requestValue = @$_GET['page'];
    $requestParam = @$_GET['request'];
    $lang = 0;

    if ($requestValue && $requestValue === 'getProjects') {
        $getData = $db->prepare("SELECT * FROM projects where lang=? order by id desc");
        $getData->execute(array($lang));
        $fetchData = $getData->fetchAll(PDO::FETCH_ASSOC);
        $jsonData = json_encode($fetchData, JSON_UNESCAPED_UNICODE);
        echo $jsonData;
    }

}

function postProcess()
{
    include "db.php";
    $requestValue = @$_GET['page'];
    
}
