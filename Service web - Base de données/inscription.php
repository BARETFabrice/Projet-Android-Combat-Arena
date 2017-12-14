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
 
$erreur = $nom = $motdepasse = $confirm_password = "";
$nom = trim($_GET['nom']);
$motdepasse = trim($_GET['motdepasse']);
$couleur = trim($_GET['couleur']);
$volume = (int) $_GET['volume'];
$courriel = trim($_GET['email']);
$age = (int) $_GET['age'];


$sql = "SELECT id FROM Utilisateur WHERE login = ?";

if($stmt = mysqli_prepare($link, $sql)){
	mysqli_stmt_bind_param($stmt, "s", $param_username);
	
	$param_username = $nom;
	
	if(mysqli_stmt_execute($stmt)){
		mysqli_stmt_store_result($stmt);
		
		if(mysqli_stmt_num_rows($stmt) == 1){
			echo '{"error":true}';
		} else{
			$nom = trim($nom);
		}
	} else{
		echo '{"error":true}';
	}
}
 
mysqli_stmt_close($stmt);

if(empty($erreur)){ //TO CHANGE $erreur
	
	$sql = "INSERT INTO Utilisateur (login, mot_de_passe, courriel, age, couleur_logo, volumeSon) VALUES (?, ?, ?, ?, ?, ?)";
	 
	if($stmt = mysqli_prepare($link, $sql)){
		mysqli_stmt_bind_param($stmt, "sssisi", $param_username, $param_password, $param_courriel, $param_age, $param_couleur, $param_volume);
		
		$param_username = $nom;
		$param_password = password_hash($motdepasse, PASSWORD_DEFAULT); 
		$param_courriel = $courriel;
		$param_age = $age;
		$param_couleur = "#" . $couleur;
		$param_volume = $volume;
		
		if(mysqli_stmt_execute($stmt)){
			echo '{"error":false}';
		} else{
			echo '{"error":true}';
		}
	}
	 
	mysqli_stmt_close($stmt);
}

mysqli_close($link);
?>