<?php
require 'Slim/Slim.php';
require 'watch_db.php';
require 'database.php';
use Slim\Slim;
\Slim\Slim::registerAutoloader();



$app = new Slim();

$app->get('/watches', 'getWatches');
$app->get('/watches/:refrence_no', 'getWatch');
$app->get('/watches/search/:query', 'findByModel');
$app->post('/watches','addWatches');
$app->delete('/watches/:refrence_no','deleteWacthes');
$app->put('/watches/:refrence_no', 'updateWatches');
$app->get('/users', 'getUser');
$app->get('/users/:idUserID', 'getUsers');
$app->post('/users','addUser');
$app->delete('/users/:idUserID','deleteUser');
$app->put('/users/:idUserID', 'updateUser');




$app->run();
?>