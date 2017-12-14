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
$nom = $motdepasse = "";

$nom = trim($_GET['nom']);
$motdepasse = trim($_GET['motdepasse']);

$sql = "SELECT login, mot_de_passe FROM Utilisateur WHERE login = ?";

if($stmt = mysqli_prepare($link, $sql)){
	mysqli_stmt_bind_param($stmt, "s", $param_username);
	$param_username = $nom;
	
	if(mysqli_stmt_execute($stmt)){
		mysqli_stmt_store_result($stmt);
		
		if(mysqli_stmt_num_rows($stmt) == 1){                    
			mysqli_stmt_bind_result($stmt, $nom, $hashed_password);
			if(mysqli_stmt_fetch($stmt)){
				if(password_verify($motdepasse, $hashed_password)){
					$reussi = true;
				} else{
					$reussi = false;
				}
			}
		} else{
			$reussi = false;
		}
	} else{
		$reussi = false;
	}
}
mysqli_stmt_close($stmt);

if($reussi)
{
	$token = generateToken();
	$sql = "UPDATE Utilisateur SET token='". $token ."' WHERE login='$nom'";
	$result = $link->query($sql);
	
	$sql = "SELECT id, login as nom, courriel, age, couleur_logo, volumeSon, date_de_creation, token FROM Utilisateur WHERE login = '$nom'";
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

function generateToken($length = 20) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

?>