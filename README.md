# car-game
a simple 1v1 board game with cars - un simple jeu de plateau en 1 contre 1 avec des voitures.

# goal - but
throw the dice and be the first on the finish line. Watch out for traps and other competitors who can make you miserable.

Jette le dé et soit le premier sur la ligne d'arrivée. Attention aux pièges et aux autres concurrents qui peuvent te faire des misères.

# Add your own Cars -Ajoute tes propres voitures

   Vehicles are named according to their color. For the name of the images you have to respect yourcolor__vers_droite.png and yourcolor_vers_gauche.png !!!
    To add a car:
    1. save your image and do a copy. invert the copy of image. Example for a black car, save as : 
    2. noire_vers_droite.png et noire_vers_gauche.png (or black_vers_droite.png and black_vers_gauche.png)
	3. copy the 2 images in this folder : assets/images/img_marqueurs/
	4. add the name of the chosen color to the array (tableau_couleurs_voitures) => $carsColors = ["rouge","bleue", "black", "pink"]; If you want to changed the "rouge" and "bleue" colors to "red" and "blue" remenber to change the image's name (rouge_vers_droite.png to red_vers_droite.png )


	Les véhicules sont nommés suivant leur couleur. 
    Pour ajouter un véhicule:
	1. créer une copie inversée de l'image et enregistrer les sous pour une nouvelle voiture noire:
	2. noire_vers_droite.png et noire_vers_gauche.png
	3. copier les 2 images dans le dossier assets/images/img_marqueurs/
	4. ajouter la couleur dans le tableau => $carsColors = ["rouge","bleue","rose", "noire"];