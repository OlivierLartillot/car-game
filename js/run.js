
const run = {

    casePlayer : [0 ,0],
    quelJoueurJoue: 1,
    indicePlayer1: 0,
    indicePlayer2: 1,
    playersInfosLife : [100,100],
    caseArrivee: 104,
    

    
    init: function () {
        console.log('le run js est lancé');
        console.log('le player 1 est sur la case ' + run.casePlayer[run.indicePlayer1]);
        
        // chargement des infos de chaque joueur
        let player1 = run.infosJoueur(1)
        let player2 = run.infosJoueur(2)

        // place les voitures sur la case départ (0)
        run.caseActuelle( player1.couleurVoiture,player2.couleurVoiture)

        

        let theDice = document.querySelector('#the_dice');
        theDice.addEventListener('submit', run.handleDice);
    },

    infosJoueur:function(idJoueur) {
        
  
        let nomPerso = document.querySelector('#player'+ idJoueur +'NomPerso').textContent
        let voiture = document.querySelector('#player'+ idJoueur +'Voiture').title
        let viePerso = document.querySelector('#player'+ idJoueur +'vie').textContent
        let vMin = document.querySelector('#player'+ idJoueur +'vitesseMinimum').textContent
        let vMax = document.querySelector('#player'+ idJoueur +'vitesseMaximum').textContent

        let vMin75 = document.querySelector('#player'+ idJoueur +'vitesseMinimum75').textContent
        let vMax75 = document.querySelector('#player'+ idJoueur +'vitesseMaximum75').textContent
        let vMin50 = document.querySelector('#player'+ idJoueur +'vitesseMinimum50').textContent
        let vMax50 = document.querySelector('#player'+ idJoueur +'vitesseMaximum50').textContent
        let vMin25 = document.querySelector('#player'+ idJoueur +'vitesseMinimum25').textContent
        let vMax25 = document.querySelector('#player'+ idJoueur +'vitesseMaximum25').textContent

        let fMin = document.querySelector('#player'+ idJoueur +'forceMinimum').textContent
        let fMax = document.querySelector('#player'+ idJoueur +'forceMaximum').textContent
        let fafMin = document.querySelector('#player'+ idJoueur +'fatigueApresFrappeMinimum').textContent
        let fafMax = document.querySelector('#player'+ idJoueur +'fatigueApresFrappeMaximum').textContent
        let dafMin = document.querySelector('#player'+ idJoueur +'deApresFrappeMinimum').textContent
        let dafMax = document.querySelector('#player'+ idJoueur +'deApresFrappeMaximum').textContent

        let arrayInfosPersos = {
            "nomPerso" : nomPerso , 
            "couleurVoiture" : voiture,
            "vie" : viePerso,
            "vitesseMin" : vMin,
            "vitesseMax" : vMax,
            "vMin75" : vMin75,
            "vMax75" : vMax75,
            "vMin50" : vMin50,
            "vMax50" : vMax50,
            "vMin25" : vMin25,
            "vMax25" : vMax25,
            "forceMin" : fMin,
            "forceMax" : fMax,
            "fatigueApresFrappeMinimum" : fafMin,
            "fatigueApresFrappeMaximum" : fafMax,
            "deApresFrappeMinimum" : dafMin,
            "deApresFrappeMaximum" : dafMax,   
        }

        return arrayInfosPersos 
    },



    caseActuelle: function(couleurVoitureJ1, couleurVoitureJ2,quelJoueur) {

        
       if (quelJoueur === 1){
            console.log('c est le joueur 1 qui est entrain de jouer')
            return run.casePlayer[0]

        }

        else if (quelJoueur === 2){
            console.log('c est le joueur 2 qui est entrain de jouer')
            return run.casePlayer[1]
        }

        else {
                const casedepart = document.querySelector('#case'+run.casePlayer[0]);
                const imgVoitureJ1 = '<img id="imgVoitureJ1" src="../assets/images/img_marqueurs/'+couleurVoitureJ1+'_vers_droite.png" alt="Voiture '+couleurVoitureJ1+'" height="30px"/>';
                const imgVoitureJ2 = '<img id="imgVoitureJ2" src="../assets/images/img_marqueurs/'+couleurVoitureJ2+'_vers_droite.png" alt="Voiture '+couleurVoitureJ2+'" height="30px"/>';
                casedepart.innerHTML = imgVoitureJ1 + imgVoitureJ2;
            
        }

/*         if (quelJoueur) {
            console.log('hourra tu nes pas nulll = ' + quelJoueur)
        }
        console.log(quelJoueur) */

 


    },

    getRandomInt: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      },

    handleDice: function (evt) {
        evt.preventDefault();
        
        // le joueur courant qui est entrain de jouer
        let joueur = run.infosJoueur(run.quelJoueurJoue)
        let playerNumber = run.quelJoueurJoue
        let playerIndex = playerNumber - 1
        let infosVie = run.playersInfosLife[playerIndex]

        console.log(run.playersInfosLife)
        console.log('la vie dans le handleDice =>' + joueur.vie)

        console.log('1. ton joueur a un dé min de ' + joueur.vitesseMin)
        //évalue la vie du joueur
        // si < 25 et le dé min > 0 => déMin -1 et dé max -1

    console.log('le joueur a une vitessemin actuelle de ' + joueur.vMin50 )
        if (joueur.vie <= 25) {
            joueur.vitesseMin = joueur.vMin25
            joueur.vitesseMax = joueur.vMax25
                if (infosVie === 50) {
                   alert(joueur.nomPerso + ' a moins de 25% de vie !') 
                   run.playersInfosLife[playerIndex] = 25
                }
            
        }
        else if (joueur.vie <= 50) {
            joueur.vitesseMin = joueur.vMin50
            joueur.vitesseMax = joueur.vMax50
            if (infosVie === 75) {
                alert(joueur.nomPerso + ' a moins de 50% de vie !') 
                run.playersInfosLife[playerIndex] = 50
             }
        }
        else if (joueur.vie <= 75) {
            joueur.vitesseMin = joueur.vMin75
            joueur.vitesseMax = joueur.vMax75
            if (infosVie === 100) {
                alert(joueur.nomPerso + ' a moins de 75% de vie !') 
                run.playersInfosLife[playerIndex] = 75
             }

        }
        else {
            joueur.vitesseMin = joueur.vitesseMin
            joueur.vitesseMax =joueur.vitesseMax
        }
       

        console.log ('l info vie est = a ' + infosVie)

        // ! lancer le dé en fonction de son min et max
        let diceResult = run.getRandomInt(joueur.vitesseMin,joueur.vitesseMax);
        console.log("le dé renvoie" + diceResult);

        let zoneDe = document.querySelector('#image_de')
        console.log('la zone dé est ' + zoneDe.src)
        zoneDe.src = '../assets/images/de/de_'+diceResult+'.png'
        
        // ! appeler la fonction qui fait avancer le personnage
        run.carMovement(diceResult, run.quelJoueurJoue-1)




        // switch du toueur du joueur
        run.quelJoueurJoue = run.quelJoueurJoue == 1 ?  run.quelJoueurJoue = 2 :  run.quelJoueurJoue = 1

        //récupère le nom du joueur
        let nomJoueur = document.querySelector('#player'+ run.quelJoueurJoue +'Name').textContent
        // récupère le span infos cest au joueur a jouer
        let infoTourJoueur = document.querySelector('#infoTourJoueur')
        // récupère le background du joueur1
        let backgroundJ1 = document.querySelector('.backgroundJ1')
        let backgroundJ2 = document.querySelector('.backgroundJ2')
        // récupère le background du joueur2

        infoTourJoueur.innerHTML = 'c\'est a <span class="white-grey"> '+ nomJoueur + '</span> de lancer le dé'
        console.log('voici le span : ' + infoTourJoueur)

        if (run.quelJoueurJoue === 1 ){      
            backgroundJ2.style.backgroundColor = "#EEEEEE"
            backgroundJ1.style.backgroundColor = "greenyellow"
        }
        else {      
            backgroundJ1.style.backgroundColor = "#EEEEEE"
            backgroundJ2.style.backgroundColor = "greenyellow"
        }
    },

    carMovement:function (diceResult, playerIndex) {

        // le player index nous sert pour mettre à jour le tableau (casePlayer)
        // numéro du joueur actif et adversaire player 1 / player2

        const currentPlayer = playerIndex +1 
        const objectCurrentPlayer = run.infosJoueur(currentPlayer)
        let opponent = 2
        let opponentIndex = null
        // de base on définit l'adversaire en player 2
        // MAIS si le currentUser est le 2 
        // adversaire est == 1 son index est donc 0
        if (currentPlayer === 2) {
            opponent = 1
            opponentIndex = 0
        }
        else {
            opponentIndex = 1
        }

        // case courante du currentUser
        let currentBox = run.casePlayer[playerIndex]
        //adversaire 
        let opponentCurrentBox = run.casePlayer[opponentIndex]

        // supprime la voiture avec l id currentPlayer
        document.querySelector('#imgVoitureJ' +currentPlayer).remove();





        // ajoute le dé au tableau casePlayer
        // c est le chiffre de la nouvelle case sur laquelle le joueur se trouve
        run.casePlayer[playerIndex] = currentBox + diceResult;

        // ajout du bonus
        let bonusMalus = run.bonusMalus(bonusMalusCases,run.casePlayer[playerIndex])

        run.casePlayer[playerIndex] = run.casePlayer[playerIndex] + bonusMalus
        newCurrentBox = run.casePlayer[playerIndex]

        console.log("la new current box est la " + newCurrentBox)

        if (newCurrentBox > run.caseArrivee) {
            newCurrentBox = run.caseArrivee
        }


/*         run.bonusMalus(malusCases,newCurrentBox)
        run.bonusMalus(bonusVie,newCurrentBox) */

        // fait bouger la voiture
        const nouvelleCase = document.querySelector('#case'+newCurrentBox);
        const imgVoiture =  document.createElement('img')
        imgVoiture.src = '../assets/images/img_marqueurs/' + objectCurrentPlayer.couleurVoiture+'_vers_droite.png'
        imgVoiture.id = 'imgVoitureJ'+ currentPlayer
        imgVoiture.style.height = '30px'
        nouvelleCase.appendChild(imgVoiture)




        // Si je tombe sur la case de mon opposant j'ai le droit de le frapper
        if (newCurrentBox === opponentCurrentBox) {
            let frapperAdversaire = confirm(objectCurrentPlayer.nomPerso + ' ,tu es sur la même case que ton adversaire. Veux tu lui faire mordre la poussière ? Cela pourrait te coûter en énergie')
            if (frapperAdversaire) {
                let forceDuCoupDonne = run.frapperAdversaire(objectCurrentPlayer.forceMin, objectCurrentPlayer.forceMax)
                console.log('la force du coup est de ' + forceDuCoupDonne)
                run.prendreDegats(run.infosJoueur(opponent), forceDuCoupDonne, opponent)
                run.prendreFatigue(objectCurrentPlayer, objectCurrentPlayer.fatigueApresFrappeMinimum, objectCurrentPlayer.fatigueApresFrappeMaximum, currentPlayer)
                run.prendreBonus(objectCurrentPlayer, objectCurrentPlayer.deApresFrappeMinimum, objectCurrentPlayer.deApresFrappeMaximum, playerIndex)

            }        
        }



        run.checkGameOver(run.infosJoueur(opponent))
        run.checkArrivee(objectCurrentPlayer, newCurrentBox,currentPlayer)

    },

 /*    moveInDom:function(newCurrentBox, objectCurrentPlayer, currentPlayer ) {
        const nouvelleCase = document.querySelector('#case'+newCurrentBox);
        const imgVoiture =  document.createElement('img')
        imgVoiture.src = '../assets/images/img_marqueurs/' + objectCurrentPlayer.couleurVoiture+'_vers_droite.png'
        imgVoiture.id = 'imgVoitureJ'+ currentPlayer
        imgVoiture.style.height = '30px'
        nouvelleCase.appendChild(imgVoiture)

    }, */

    frapperAdversaire: function (frappeMin, frappeMax) {
        let pointsDeFrappe = run.getRandomInt(frappeMin, frappeMax)
        console.log('tu as frappé fort => ' + pointsDeFrappe )
        return pointsDeFrappe
    },

    prendreDegats: function(joueur, degats, playerNumber) {   
        let nouveauxPointsDeVie = joueur.vie - degats
        console.log('les nouveaux points de vie de ' + joueur.nomPerso + ' sont = ' + nouveauxPointsDeVie )
        console.log('le index player id renvoie : #player'+playerNumber+'vie')
        document.querySelector('#player'+playerNumber+'vie').innerHTML = nouveauxPointsDeVie
        return nouveauxPointsDeVie
    },

    prendreFatigue: function(joueur, fatigueMin, fatigueMax,playerNumber) {
        let calculFatigue = run.getRandomInt(fatigueMin, fatigueMax)
        let fatigueApresFrappe = joueur.vie - calculFatigue
        console.log('les nouveaux points de vie de ' + joueur.nomPerso + ' sont = ' + fatigueApresFrappe )
        document.querySelector('#player'+playerNumber+'vie').innerHTML = fatigueApresFrappe
        return fatigueApresFrappe
    },

    prendreBonus: function(joueur, bonusFrappeMin, bonusFrappeMax, playerIndex) {
        let calculBonus = run.getRandomInt(bonusFrappeMin, bonusFrappeMax)
        //ajout du nombre de case
        run.carMovement(calculBonus, playerIndex)
    },

    checkGameOver:function(joueur){
        
        if (joueur.vie <= 0) {
                alert( joueur.nomPerso + " est gameOver")
                window.location='http://localhost/car-game/'
                die()
            }
    },

    checkArrivee:function(joueur, caseJoueur,currentPlayer) {
        if (caseJoueur >= run.caseArrivee) {

            alert( joueur.nomPerso + " a franchi la ligne d'arrivée !!! ")
            window.location='http://localhost/car-game/'
            die()
        }
    },

    // regarde dans le tab
    bonusMalus:function (texteBonus, numeroDeLaCase) {
        if (texteBonus.hasOwnProperty(numeroDeLaCase)) {

                console.log("tu as un bonus")
                console.log(texteBonus[numeroDeLaCase].texte + 'bonus + ' + texteBonus[numeroDeLaCase].bonus +  'bonusVie ' + texteBonus[numeroDeLaCase].bonusVie )
            return texteBonus[numeroDeLaCase].bonus
        }
        return 0
     },

}




document.addEventListener('DOMContentLoaded', run.init);

