
const run = {

    casePlayer : [0 ,0],
    quelJoueurJoue: 1,
    indicePlayer1: 0,
    indicePlayer2: 1,

    
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
        console.log(joueur)

        
       
        // ! lancer le dé en fonction de son min et max
        let diceResult = run.getRandomInt(joueur.vitesseMin,joueur.vitesseMax);
        console.log("le dé renvoie" + diceResult);


        
        // ! appeler la fonction qui fait avancer le personnage
        run.carMovement(diceResult, run.quelJoueurJoue-1)

        // ! appeler la fonction qui compare si on est sur la meme case

        // ! appeler la fonction  qui gère le combat si on est sur la même case


        // switch du toueur du joueur
        run.quelJoueurJoue = run.quelJoueurJoue == 1 ?  run.quelJoueurJoue = 2 :  run.quelJoueurJoue = 1
    },

    carMovement:function (diceResult, playerIndex) {

        // le player index nous sert pour mettre à jour le tableau (casePlayer)
        // numéro du joueur actif et adversaire player 1 / player2
        const currentPlayer = playerIndex +1 
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

        // ajoute le dé 
        // le résultat est stocké dans une variable lisible
        // c est le chiffre de la nouvelle case sur laquelle le joueur se trouve
        run.casePlayer[playerIndex] = currentBox + diceResult;
        newCurrentBox = run.casePlayer[playerIndex]

        // fait bouger la voiture
        const nouvelleCase = document.querySelector('#case'+newCurrentBox);
        const imgVoiture =  document.createElement('img')
        imgVoiture.src = '../assets/images/img_marqueurs/' + run.infosJoueur(currentPlayer).couleurVoiture+'_vers_droite.png'
        imgVoiture.id = 'imgVoitureJ'+ currentPlayer
        imgVoiture.style.height = '30px'
        nouvelleCase.appendChild(imgVoiture)

        // Si je tombe sur la case de mon opposant j'ai le droit de le frapper
        if (newCurrentBox === opponentCurrentBox) {
            let frapperAdversaire = confirm('Tu es sur la même case que ton adversaire. Veux tu lui faire mordre la poussière ? Cela pourrait te coûter en énergie')
            if (frapperAdversaire) {
                let forceDuCoupDonne = run.frapperAdversaire(run.infosJoueur(currentPlayer).forceMin, run.infosJoueur(currentPlayer).forceMax)
                console.log('la force du coup est de ' + forceDuCoupDonne)
                run.prendreDegats(run.infosJoueur(opponent), forceDuCoupDonne)
            }
        
        }


        // attrape la nouvelle case 
        // et affiches y la voiture

    },

    frapperAdversaire: function (frappeMin, frappeMax) {
        let pointesDeFrappe = run.getRandomInt(frappeMin, frappeMax)
        return pointesDeFrappe
    },

    prendreDegats: function(joueur, degats) {
        let nouveauxPointsDeVie = joueur.vie - degats
       return nouveauxPointsDeVie
    },

    prendreFatigue: function() {

    },

    prendreBonus: function() {

    }

}


document.addEventListener('DOMContentLoaded', run.init);

