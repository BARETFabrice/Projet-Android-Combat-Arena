<?php
header("Access-Control-Allow-Origin: *");
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'alexsiro_combat_arena_admin');
define('DB_PASSWORD', 'HZM]jeyhyHw9');
define('DB_NAME', 'alexsiro_combatarena');
 
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
 
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

$sql = "SELECT U.login as nom, P.dureePartie as duree FROM Partie as P INNER JOIN Utilisateur as U on P.idUtilisateur = U.id ORDER BY duree asc LIMIT 10";
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

$json = json_encode($myArray);

echo $json;
?>