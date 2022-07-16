

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="assets/style.css">
    <title>Plateau de jeu - car-game</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap" rel="stylesheet">
	<script src="./js/app.js" defer></script>
</head>
<body>
    <div id="plateauDeJeu">
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