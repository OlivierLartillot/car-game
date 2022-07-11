<?php 
	//!!! améliorer les <br> en créant un fichier css
	// en attendant une table sql je rentre mes infos dans des tableaux php
	// les personnages et leur attributs / capacités
	require_once "tableau_persos.php";
	// récupération des images grace au tableau des couleurs
	require_once "tableau_couleurs_voitures.php";		
?> 

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="assets/style.css">
    <title>Choix des personnages - car-game</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap" rel="stylesheet">
	<script src="./js/app.js" defer></script>
	<script src="./js/components/run.js" defer></script>
</head>
<body>
	<div id="preparation_course">
		<div class="titleH1">
			<img src="./assets/images/chequered-flag-icon.svg" alt="drapeau à damier" width="50"> 
			<h1>Préparez vous pour la course</h1>
			<img src="./assets/images/chequered-flag-icon.svg" alt="drapeau à damier" width="50">
		</div>
		<form class="choose_player_form" method="post" action="test_d.php">
			<div class="choose_player__board__container">
			<!-- pour construire les formulaires J1 et J2 -->
			<?php for ($i=1;$i<3;$i++): ?>
				<!-- Différencier les id/label dans les radios -->
				<?php $idJoueur = ($i == 1) ? "a" : "b"; ?>
				
					<fieldset class="choose_player__board">
						<legend class="player_number">JOUEUR <?= $i ?> :</legend>
							<label for="nomJ<?= $i ?>">Nom :</label><input type="text" name="nomJ<?= $i ?>" id="nomJ<?= $i ?>" required="required"/><br/>
							<div id="erreurNameJ<?= $i ?>"></div>
						<legend>Choissisez le perso :</legend><br/>
						<div class="radio_personnages">
							<!-- récupère tous les personnages pour la sélection dans un radio -->
							<?php foreach ($persoDatas as $key => $currentPersonnage) : ?>
								<input required="required" type="radio" id="perso<?= $key . $idJoueur ?>" name="persoj<?= $i ?>" value="<?= $currentPersonnage->name  ?>">
								<label for="perso<?= $key . $idJoueur ?>">
									<?= $currentPersonnage->name  ?> / Qualité : <?= $currentPersonnage->qualite  ?><br/>
								</label>
								<div id="erreurNameJ<?= $i ?>"></div>
							<?php endforeach; ?>
						</div>

						<br/>
						<!-- Récupère toutes les couleurs des véhicules pour la sélection dans un radio-->
						<legend>Choississez votre véhicule :</legend>
						<?php foreach ($carsColors as $currentColor) : ?>
							<input required="required" type="radio" id="<?= $currentColor . $idJoueur ?>" name="v<?= $i ?>" value="<?= $currentColor ?>">
							<label for="<?= $currentColor . $idJoueur?>"><img src="assets/images/img_marqueurs/<?= $currentColor ?>_vers_droite.png" alt="Voiture <?= $currentColor ?>" height="30px"/></label>
						<?php endforeach; ?>
					</fieldset>
			<?php endfor; ?>
			</div>

			<input type="submit" id="submit_form" name="parametresDeJeu" value="Commencer la partie">
		</form>
	</div>	
	<div id="course">
		<div class="titleH1">
			<img src="./assets/images/chequered-flag-icon.svg" alt="drapeau à damier" width="50"> 
			<h1>Course en cours</h1>
			<img src="./assets/images/chequered-flag-icon.svg" alt="drapeau à damier" width="50">
		</div>
		<div class="panneau_de_jeu">
			<div class="ingame_players_board">
				<?php for($i=1; $i<3; $i++) :?>
					<div class="player">
						<h2 id="player<?= $i ?>Name"></h2>
						<ul class="payerUl">
							<li id="player<?= $i ?>NomPerso"></li>
							<li id="player<?= $i ?>Voiture"></li>
						</ul>
					</div>
				<?php endfor; ?>
				<div id="dice">
					<form action="#" method="post" id=the_dice>
						<label>Lancer le dé</label>
						<input type="submit" value="lancer le dé" />
					</form>
				</div>
			</div>
			<div id="grille_jeu">
				<?php for ($i=0; $i < 105; $i++) :?>
				<div id="case<?= $i ?>" class="carre_de_grille"> 
					<?= $i ?> 
				</div>
				<?php endfor; ?>
			</div>
		




		</div>
	</div>					
</body>

</html>