<?php 
require_once "../datas/tableau_persos.php";
require_once "../datas/tableau_couleurs_voitures.php";


// Si les infos n'arrivent pas par un submit
// informations don't come from the submit button 
  if (!isset($_POST['soumissionParametresDeJeu'])) {
    header('Location: ../index.php');
  };

// le dernier id du tableau
    $lastArrayKey = array_key_last($persoDatas);


// nettoie et enregistre les données recues du formulaire
// Infos J1 + filter php
    $nomJ1 =(filter_var($_POST["nomJ1"],  FILTER_SANITIZE_FULL_SPECIAL_CHARS));
    $idPersoJ1 = (filter_var($_POST["persoJ1"],  FILTER_SANITIZE_NUMBER_INT));
    $couleurVehiculeJ1 =(filter_var($_POST["couleurVehiculeJ1"],  FILTER_SANITIZE_FULL_SPECIAL_CHARS));

// Infos J2 +filter php
    $nomJ2 =(filter_var($_POST["nomJ2"],  FILTER_SANITIZE_FULL_SPECIAL_CHARS));
    $idPersoJ2 = (filter_var($_POST["persoJ2"],  FILTER_SANITIZE_NUMBER_INT));
    $couleurVehiculeJ2 =(filter_var($_POST["couleurVehiculeJ2"],  FILTER_SANITIZE_FULL_SPECIAL_CHARS));


// tests 
    $error = false;
    // problème on revient sur la page 
        // le nom doit comporter au moins 3 caractères
            if ((strlen($nomJ1) < 3) || (strlen($nomJ2) < 3)) { $error = true;}
        // l'id doit etre entre 1 et lastArrayKey
            if ((($idPersoJ1 < 1) || ($idPersoJ1 > $lastArrayKey)) || (($idPersoJ2 < 1) || ($idPersoJ2 > $lastArrayKey))) { $error = true;}
        // la couleur recue doit être dans le tableau
            if ((!in_array($couleurVehiculeJ1, $carsColors )) || (!in_array($couleurVehiculeJ2, $carsColors )))   { $error = true;}

        // if there is an error we do a redirection to the choice players page
        if ($error === true) {
            header('Location: ../index.php');
            exit();
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