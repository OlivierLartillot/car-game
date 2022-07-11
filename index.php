<?php 
	//!!! Explications à déplacer vers Markdown
	//!!! améliorer les <br> en créant un fichier css
	// en attendant une table sql je rentre mes infos dans des tableaux php

	// les personnages et leur attributs / capacités
	require_once "tableau_persos.php";

	require_once "tableau_couleurs_voitures.php";		
?> 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Choix des personnages - car-game</title>
</head>
<body>
    <h1>Préparez vous pour la course</h1>
	<form method="post" action="test_d.php">
		<!-- pour construire les formulaires J1 et J2 -->
		<?php for ($i=1;$i<3;$i++): ?>
			<!-- Différencier les id/label dans les radios -->
			<?php $idJoueur = ($i == 1) ? "a" : "b"; ?>

			<fieldset>
				<legend>JOUEUR <?= $i ?> :</legend>
					<label for="nomJ<?= $i ?>">Nom :</label><input type="text" name="nomJ<?= $i ?>" id="nomJ<?= $i ?>"/><br/><br/>

				<legend>Choissisez le perso :</legend><br/>

				<!-- récupère tous les persos pour la sélection dans un radio -->
				<?php foreach ($persoDatas as $key => $currentPersonnage) : ?>
					<input type="radio" id="perso<?= $key . $idJoueur ?>" name="persoj<?= $i ?>" value="<?= $currentPersonnage->name  ?>">
					<label for="perso<?= $key . $idJoueur ?>">
						<?= $currentPersonnage->name  ?> / vitesse max : <?= $currentPersonnage->vitesseMaximum  ?>  / force max : <?= $currentPersonnage->forceMaximum  ?> <br/>
					</label>
				<?php endforeach; ?>
				<br/>
				<!-- Récupère toutes les couleurs de véhicules pour la sélection dans un radio-->
				<legend>Choississez véhicule</legend>
				<?php foreach ($carsColors as $currentColor) : ?>
					<input type="radio" id="<?= $currentColor . $idJoueur ?>" name="v<?= $i ?>" value="<?= $currentColor ?>">
					<label for="<?= $currentColor . $idJoueur?>"><img src="assets/images/img_marqueurs/<?= $currentColor ?>_vers_droite.png" alt="Voiture <?= $currentColor ?>" height="30px"/></label>
				<?php endforeach; ?>
			</fieldset>
		<?php endfor; ?>
		
			<input type="submit" name="parametresDeJeu"/>
	</form>

</body>

</html>