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

$id = (int) $_GET['id'];
$nom = trim($_GET['nom']);
$couleur = trim($_GET['couleur']);
$volume = (int) $_GET['volume'];
$courriel = trim($_GET['courriel']);
$age = (int) $_GET['age'];

$sql = "UPDATE Utilisateur SET login='$nom', couleur_logo='#$couleur', volumeSon='$volume', courriel='$courriel', age='$age' WHERE id=$id";
$result = $link->query($sql);
//echo $sql;
echo '{"error":false}';

mysqli_close($link);

?>