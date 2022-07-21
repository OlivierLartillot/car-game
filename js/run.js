
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

        // numéro du joueur
        playerNumber = playerIndex +1 

        let currentBox = run.casePlayer[playerIndex]

        // supprime la voiture avec l id playerNumber
        let el = document.querySelector('#imgVoitureJ' +playerNumber).remove();


        console.log('l ancienne case a supprimer et qui possède l id : imgVoitureJ' +playerNumber )



        console.log('la valeur est ' + currentBox);
        // ajoute le dé
        run.casePlayer[playerIndex] = currentBox + diceResult;


        
        // fait bouger la voiture
        console.log('la nouvelle case est : ' + run.casePlayer[playerIndex])
        const nouvelleCase = document.querySelector('#case'+run.casePlayer[playerIndex]);

        const imgVoiture =  document.createElement('img')
        imgVoiture.src = '../assets/images/img_marqueurs/' + run.infosJoueur(playerNumber).couleurVoiture+'_vers_droite.png'
        imgVoiture.id = 'imgVoitureJ'+ playerNumber
        imgVoiture.style.height = '30px'
        nouvelleCase.appendChild(imgVoiture)
/*         '<img id="imgVoitureJ'+ playerNumber + '" src="../assets/images/img_marqueurs/'+run.infosJoueur(playerNumber).couleurVoiture+'_vers_droite.png" alt="Voiture '+run.infosJoueur(playerNumber).couleurVoiture+'" height="30px"/>';
     */    //nouvelleCase.appendChild(imgVoiture)   
        console.log(nouvelleCase)
        // attrape l'ancienne case
        // annule la voiture dans l'ancienne case
        //document.querySelector('#case'+currentBox).textContent = '0';
        console.log('la case actuelle avant effacement est la ')


        // attrape la nouvelle case 
        // et affiches y la voiture

    }




}


document.addEventListener('DOMContentLoaded', run.init);

