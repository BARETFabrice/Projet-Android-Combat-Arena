<?php
header("Access-Control-Allow-Origin: *");
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'alexsiro_combat_arena_admin');
define('DB_PASSWORD', 'HZM]jeyhyHw9');
define('DB_NAME', 'alexsiro_combatarena');
 
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

$reussi = false;
 
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
$id = $token = "";

$id = (int) $_GET['id'];
$token = trim($_GET['token']);

$sql = "SELECT token FROM Utilisateur WHERE id = $id";
$result = $link->query($sql);
$row = $result->fetch_assoc();
if($row['token'] == $token)
	$reussi = true;

if($reussi)
{
	
	$sql = "SELECT id, login as nom, courriel, age, couleur_logo, volumeSon, date_de_creation, token FROM Utilisateur WHERE id = $id";
	$result = $link->query($sql);
	$myArray = array();
	$i = 0;

	if ($result->num_rows > 0) {
		while($row = $result->fetch_assoc()) {
			$myArray[$i] = $row;
			$i++;
		}
	} else {
		echo '{"error":true}';
	}

	$json = json_encode($myArray[0]);

	echo $json;
}
else
{
	echo '{"error":true}';
}

mysqli_close($link);

?>