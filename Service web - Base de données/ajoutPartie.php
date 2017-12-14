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
 
$idUtilisateur = (int) $_GET['id'];
$victoire = (int) $_GET['victoire'];
$chutes = (int) $_GET['chutes'];
$duree = (int) $_GET['duree'];

$sql = "INSERT INTO Partie (idUtilisateur, victoire, nombreDeChutes, dureePartie) VALUES ($idUtilisateur, $victoire, $chutes, $duree)";
$result = $link->query($sql);

echo '{"error":false}';

mysqli_close($link);
?>