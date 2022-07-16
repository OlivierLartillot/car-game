<?php 

// Si les infos n'arrivent pas par un submit 
  if (!isset($_POST['soumissionParametresDeJeu'])) {
    header('Location: ../index.php');
  };

  // Infos J1
$nomJ1 =(filter_var($_POST["nomJ1"],  FILTER_SANITIZE_FULL_SPECIAL_CHARS));
$idPersoJ1 = (filter_var($_POST["persoJ1"],  FILTER_SANITIZE_NUMBER_INT));
echo 'nomJ1' . $nomJ1;



// Infos J2
$nomJ2 =(filter_var($_POST["nomJ2"],  FILTER_SANITIZE_FULL_SPECIAL_CHARS));
$idPersoJ2 = (filter_var($_POST["persoJ2"],  FILTER_SANITIZE_NUMBER_INT));
echo 'nomJ2' . $nomJ2;

// test, nettoie et enregistre les données recues du formulaire
    // problème on revient sur la page en affichant une erreur
    $error = false;
   if ((strlen($_POST["nomJ1"]) < 3) || (strlen($_POST["nomJ2"]) < 3)) { $error = true;}


  if ($error === true) {
    echo 'si erreur = true oon peut rediriger';
  }

    // si tout est bon on peut charger la page de course, 
    // récupérer les données des persos choisis
    // et passer le relai au js pour la course







require_once "../datas/tableau_persos.php";






//récupère l'id du perso
foreach ($persoDatas[$idPersoJ1] as $currentObjectProperty) {
    echo $currentObjectProperty . '<br/>'; 
} 

foreach ($persoDatas[$idPersoJ2] as $currentObjectProperty) {
    echo $currentObjectProperty . '<br/>'; 
} 