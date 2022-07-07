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
		<fieldset>
			<legend>JOUEUR 1 :</legend>
				<label for="nomJ1">Nom :</label><input type="text" name="nomJ1" id="nomJ1"/><br/><br/>

				<?php 
					// en attendant une table sql je rentre mes infos dans un tableau php
					require_once "tableau_persos.php";
					require_once "tableau_couleurs_voitures.php";		
				?> 

			<legend>Choissisez perso :</legend><br/>

			<?php foreach ($persoDatas as $key => $currentPersonnage) : ?>
				<input type="radio" id="perso<?= $key ?>" name="persoj1" value="<?= $currentPersonnage->name  ?>">
				<label for="perso<?= $key ?>">
					Nom : <?= $currentPersonnage->name  ?> / vitesse max : <?= $currentPersonnage->vitesseMaximum  ?>  / force max : <?= $currentPersonnage->forceMaximum  ?> <br/>
				</label>
			<?php endforeach; ?>
			
			<legend>Choississez véhicule</legend>
			<?php foreach ($carsColors as $currentColor) : ?>
				<input type="radio" id="<?= $currentColor ?>" name="v1" value="<?= $currentColor ?>">
				<label for="<?= $currentColor ?>"><img src="assets/images/img_marqueurs/<?= $currentColor ?>_vers_droite.png" alt="Voiture <?= $currentColor ?>" height="30px"/></label>
			<?php endforeach; ?>
		</fieldset>
		
		<fieldset>
			<legend>JOUEUR 2 :</legend>
				<label for="nomJ2">Joueur2</label><input type="text" name="nomJ2" id="nomJ2"/><br/>
			
			<legend>Choissisez perso :</legend><br/>
				<input type="radio" id="perso1b" name="persoj2" value="speedy"><label for="perso1b"><img src="personnages/images/speedy.jpg" alt="speedy" height="200px"/></label>
				<input type="radio" id="perso2b" name="persoj2" value="morse"><label for="perso2b"><img src="personnages/images/morse.jpg" alt="morse" height="200px"/></label><br/>
			
			<legend>Choississez véhicule</legend>
				<input type="radio" id="Vrougeb" name="v2" value="rouge"><label for="Vrougeb"><img src="assets/images/img_marqueurs/rouge_vers_droite.png" alt="Voiture rouge" height="30px"/></label>
				<input type="radio" id="Vbleueb" name="v2" value="bleue"><label for="Vbleueb"><img src="assets/images/img_marqueurs/bleue_vers_droite.png" alt="Voiture bleue" height="30px"/></label>
				<input type="radio" id="Vroseb" name="v2" value="rose"><label for="Vroseb"><img src="assets/images/img_marqueurs/rose_vers_droite.png" alt="Voiture rose" height="30px"/></label>
		</fieldset>
	
	<input type="submit" name="parametresDeJeu"/>
	</form>

</body>

</html>