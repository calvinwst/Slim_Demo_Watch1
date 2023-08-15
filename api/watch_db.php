<?php
function getWatches(){
    $query = "SELECT * FROM watch_details";
    try{
        global $db;
        $watches = $db->query($query);
        $watches = $watches->fetchAll(PDO::FETCH_ASSOC);
        header("Content-Type: application/json", true);
        echo '{"watches": ' .json_encode($watches) . '}';
    }catch(PDOException $e){
        echo '{"error":{"text":'. $e->getMessage() .'}}'; 
    }
}

function getWatch($refrence_no){
	$query = "SELECT * FROM watch_details WHERE refrence_no = '$refrence_no'";
    try {
		global $db;
		$watches = $db->query($query);  
		$watch = $watches->fetch(PDO::FETCH_ASSOC);
        header("Content-Type: application/json", true);
        echo json_encode($watch);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}


function findByModel($model){
	$query = "SELECT * FROM watch_details WHERE UPPER(model) LIKE ". '"%'. $model.'%"'."ORDER BY model";
	try{
		global $db;
		$watches = $db->query($query);
		$watch = $watches->fetch(PDO::FETCH_ASSOC);
		header("Content-Type: application/json", true);
		echo json_encode($watch);
	}catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}

function addWatches(){
	global $app;
	$request = $app->request();
	$watch = json_decode($request->getBody());
	$model = $watch->model;
	$model_year = $watch->model_year;
	$style = $watch->style;
	$manufacturer = $watch->manufacturer;
	$country = $watch->country;
	$movement_types = $watch->movement_types;
	$gender = $watch->gender;
	$diameter = $watch->diameter;
	$price = $watch->price;
	$query = "INSERT INTO watch_details
				(model, model_year, style, manufacturer, country, movement_types, gender, diameter, price)
				VALUES
				('$model', '$model_year', '$style', '$manufacturer', '$country', '$movement_types','$gender','$diameter', '$price')";
	try{
		global $db;
		$db->exec($query);
		$watch->refrence_no = $db->lastInsertId();
		echo json_encode($watch);
	}catch(PDOException $e){
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function deleteWacthes($refrence_no) {
	$query ="DELETE FROM watch_details WHERE refrence_no=$refrence_no";
	try{
		global $db;
		$db->exec($query);
	}catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function updateWatches($refrence_no){
	global $app;
	$request = $app->request();
	$watch = json_decode($request->getBody());
	$model = $watch->model;
	$model_year = $watch->model_year;
	$style = $watch->style;
	$manufacturer = $watch->manufacturer;
	$country = $watch->country;
	$movement_types = $watch->movement_types;
	$gender = $watch->gender;
	$diameter = $watch-> diameter;
	$price = $watch->price;
	$query = "UPDATE watch_details SET model='$model', model_year='$model_year', style='$style', manufacturer='$manufacturer', country='$country', movement_types='$movement_types', gender='$gender', diameter='$diameter', price='$price' WHERE refrence_no = '$refrence_no'";
	try{
		global $db;
		$db->exec($query); 
		echo json_encode($watch);
	}catch(PDOException $e){
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}

function getUser(){
    $query = "SELECT * FROM UserID ";
    try{
        global $db;
        $users = $db->query($query);
        $users = $users->fetchAll(PDO::FETCH_ASSOC);
        header("Content-Type: application/json", true);
        echo '{"users": ' .json_encode($users) . '}';
    }catch(PDOException $e){
        echo '{"error":{"text":'. $e->getMessage() .'}}'; 
    }
}
function getUsers($idUserID){
	$query = "SELECT * FROM UserID WHERE idUserID = '$idUserID'";
    try {
		global $db;
		$users = $db->query($query);  
		$user = $users->fetch(PDO::FETCH_ASSOC);
        header("Content-Type: application/json", true);
        echo json_encode($user);
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}
function findByName($FirstName){
	$query = "SELECT * FROM UserID WHERE UPPER (FirstName) LIKE ". '"%'.$FirstName.'%"'."ORDER BY FirstName";
	try{
		global $db;
		$users = $db->query($query);
		$user = $users->fetch(PDO::FETCH_ASSOC);
		header("Content-Type: application/json", true);
		echo json_encode($user);
	}catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
}
function deleteUser($idUserID){
	$query ="DELETE FROM UserID WHERE idUserID=$idUserID";
	try{
		global $db;
		$db->exec($query);
	}catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}
function updateUser($idUserID){
	global $app;
	$request = $app->request();
	$users = json_decode($request->getBody());
	$LastName = $users -> LastName;
	$FirstName = $users -> FirstName;
	$Address = $users -> Address;
	$City = $users -> City;
	$query ="UPDATE UserID SET LastName = '$LastName', FirstName = '$FirstName' , Address = '$Address', City = '$City' WHERE idUserID = '$idUserID'";
	try{
		global $db;
		$db->exec($query); 
		echo json_encode($users);
	}catch(PDOException $e){
		echo '{"error":{"text":'. $e->getMessage() .'}}'; 
	}
}
function addUser(){
	global $app;
	$request = $app->request();
	$users = json_decode($request->getBody());
	$LastName = $users -> LastName;
	$FirstName = $users -> FirstName;
	$Address = $users -> Address;
	$City = $users -> City;
	$query = "INSERT INTO UserID (LastName, FirstName, Address, City) 
			VALUES
			('$LastName', '$FirstName', '$Address', '$City')";
		try{
			global $db;
			$db->exec($query);
			$users->idUserID = $db->lastInsertId();
			echo json_encode($users);
		}catch(PDOException $e){
			echo '{"error":{"text":'. $e->getMessage() .'}}'; 
		}
}

?>

