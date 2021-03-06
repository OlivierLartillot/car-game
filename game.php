<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="../assets/style.css">
    <title>Plateau de jeu - car-game</title>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap" rel="stylesheet">
	<script src="../js/run.js" defer></script>
    <script src="../datas/bonus.js" defer></script> 
</head>
<body>
    <div id="plateauDeJeu">
        <div class="titleH1">
            <img src="../assets/images/chequered-flag-icon.svg" alt="drapeau à damier" width="50"> 
            <h1>Course en cours</h1>
            <img src="../assets/images/chequered-flag-icon.svg" alt="drapeau à damier" width="50">
        </div>

        <!-- The Modal -->
        <div id="myModal" class="modal">

            <!-- Modal content -->
            <div class="modal-content">
                <span class="close">&times;</span>
                <p>C'est à <?= $nomJ1 ?> de commencer</p>
            </div>

        </div>
        <div class="panneau_de_jeu">
            <div class="ingame_players_board">
                <?php for($i=1; $i<3; $i++) :?>
                    <div class="player backgroundJ<?=$i?>">
                        <h2 id="player<?= $i ?>Name"><?= ${'nomJ'.$i} ?></h2>
                        <ul class="payerUl">
                            <li id="player<?= $i ?>NomPerso"><?= $persoDatas[${'idPersoJ'.$i}]->name ?></li>
                            <li id="player<?= $i ?>Voiture" title="<?= ${'couleurVehiculeJ'.$i} ?>"> <img src="../assets/images/img_marqueurs/<?= ${'couleurVehiculeJ'.$i} ?>_vers_droite.png" alt="Voiture <?= ${'couleurVehiculeJ'.$i} ?>" height="30px"/></li>
                            <li id="player<?= $i ?>qualite"><?= $persoDatas[${'idPersoJ'.$i}]->qualite ?></li>
                            <li id="player<?= $i ?>vie"><?= $persoDatas[${'idPersoJ'.$i}]->vie ?></li>
                            <li class="d-none" id="player<?= $i ?>vitesseMinimum"><?= $persoDatas[${'idPersoJ'.$i}]->vitesseMinimum ?></li>
                            <li class="d-none" id="player<?= $i ?>vitesseMaximum"><?= $persoDatas[${'idPersoJ'.$i}]->vitesseMaximum ?></li>
                            <li class="d-none" id="player<?= $i ?>vitesseMinimum75"><?= $persoDatas[${'idPersoJ'.$i}]->vitesseMinimum75 ?></li>
                            <li class="d-none" id="player<?= $i ?>vitesseMaximum75"><?= $persoDatas[${'idPersoJ'.$i}]->vitesseMaximum75 ?></li>
                            <li class="d-none" id="player<?= $i ?>vitesseMinimum50"><?= $persoDatas[${'idPersoJ'.$i}]->vitesseMinimum50 ?></li>
                            <li class="d-none" id="player<?= $i ?>vitesseMaximum50"><?= $persoDatas[${'idPersoJ'.$i}]->vitesseMaximum50 ?></li>
                            <li class="d-none" id="player<?= $i ?>vitesseMinimum25"><?= $persoDatas[${'idPersoJ'.$i}]->vitesseMinimum25 ?></li>
                            <li class="d-none" id="player<?= $i ?>vitesseMaximum25"><?= $persoDatas[${'idPersoJ'.$i}]->vitesseMaximum25 ?></li>
                            <li class="d-none" id="player<?= $i ?>forceMinimum"><?= $persoDatas[${'idPersoJ'.$i}]->forceMinimum ?></li>
                            <li class="d-none" id="player<?= $i ?>forceMaximum"><?= $persoDatas[${'idPersoJ'.$i}]->forceMaximum ?></li>
                            <li class="d-none" id="player<?= $i ?>fatigueApresFrappeMinimum"><?= $persoDatas[${'idPersoJ'.$i}]->fatigueApresFrappeMinimum ?></li>
                            <li class="d-none" id="player<?= $i ?>fatigueApresFrappeMaximum"><?= $persoDatas[${'idPersoJ'.$i}]->fatigueApresFrappeMaximum ?></li>
                            <li class="d-none" id="player<?= $i ?>deApresFrappeMinimum"><?= $persoDatas[${'idPersoJ'.$i}]->deApresFrappeMinimum ?></li>
                            <li class="d-none" id="player<?= $i ?>deApresFrappeMaximum"><?= $persoDatas[${'idPersoJ'.$i}]->deApresFrappeMaximum ?></li>

                        </ul>
                    </div>
                <?php endfor; ?>
                <div id="dice">
                    <form action="#" method="post" id="the_dice">
                        <label>Lancer le dé</label><br>
                        <p id="infoTourJoueur"> C'est à <span class="white-grey"><?= $nomJ1 ?></span> de jeter le dé</p>
                        <input type="submit" value="lancer le dé" /><br/>
                        <img id="image_de" src="../assets/images/de/de_1.png"/>
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