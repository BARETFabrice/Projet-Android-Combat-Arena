<?php
header("Access-Control-Allow-Origin: *");
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'alexsiro_combat_arena_admin');
define('DB_PASSWORD', 'HZM]jeyhyHw9');
define('DB_NAME', 'alexsiro_combatarena');
 
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
$id = (int) $_GET['id'];
 
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

$sql = "SELECT * FROM Partie WHERE idUtilisateur = $id ORDER BY date asc LIMIT 1";
$result = $link->query($sql);
$myArray = array();
$i = 0;

if ($result->num_rows > 0) {
	while($row = $result->fetch_assoc()) {
		$myArray[$i] = $row;
		$i++;
	}
	$json = json_encode($myArray[0]);

	echo $json;
} else {
	echo '{"error":"premiere-partie"}';
}


?>