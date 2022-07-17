
const run = {

    casePlayer1: 0,
    caseplayer2: 0,
    


    init: function () {
        console.log('le run js est lancé');
        console.log('le player 1 est sur la case ' + run.casePlayer1);


        /* let nomPersoJ1 = array[0].perso;
        console.log('le perso choisi par le J1 est ' + nomPersoJ1)

        let casedepart = document.querySelector('#case0');
        let vehiculeJ1 = array[0].vehicule;
        let vehiculeJ2 = array[1].vehicule; 
        casedepart.innerHTML = '<img src="./assets/images/img_marqueurs/'+vehiculeJ1+'_vers_droite.png" alt="Voiture '+vehiculeJ1+'" height="30px"/><img src="./assets/images/img_marqueurs/'+vehiculeJ2+'_vers_droite.png" alt="Voiture '+vehiculeJ2+'" height="30px"/>';
       */ 
      let theDice = document.querySelector('#the_dice');
        theDice.addEventListener('submit', this.handleDice);

       let J1 = run.infosJoueur(1)
       let J2 = run.infosJoueur(2)


        run.caseDepart(J1.couleurVoiture, J2.couleurVoiture)
   
    },

    infosJoueur:function(idJoueur) {
        
  
        let nomPerso = document.querySelector('#player'+ idJoueur +'NomPerso').textContent
        let voiture = document.querySelector('#player'+ idJoueur +'Voiture').title
        let vMin = document.querySelector('#player'+ idJoueur +'Voiture').vitesseMinimum
        let vMax = document.querySelector('#player'+ idJoueur +'Voiture').vitesseMaximum
        let fMin = document.querySelector('#player'+ idJoueur +'Voiture').forceMinimum
        let fMax = document.querySelector('#player'+ idJoueur +'Voiture').forceMaximum
        let fafMin = document.querySelector('#player'+ idJoueur +'Voiture').fatigueApresFrappeMinimum
        let fafMax = document.querySelector('#player'+ idJoueur +'Voiture').fatigueApresFrappeMaximum
        let dafMin = document.querySelector('#player'+ idJoueur +'Voiture').deApresFrappeMinimum
        let dafMax = document.querySelector('#player'+ idJoueur +'Voiture').deApresFrappeMaximum

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

    caseDepart: function(couleurVoitureJ1, couleurVoitureJ2) {

        const casedepart = document.querySelector('#case0');
        const imgVoitureJ1 = '<img src="../assets/images/img_marqueurs/'+couleurVoitureJ1+'_vers_droite.png" alt="Voiture '+couleurVoitureJ1+'" height="30px"/>';
        const imgVoitureJ2 = '<img src="../assets/images/img_marqueurs/'+couleurVoitureJ2+'_vers_droite.png" alt="Voiture '+couleurVoitureJ2+'" height="30px"/>';

        casedepart.innerHTML = imgVoitureJ1 + imgVoitureJ2;
 


    },

    getRandomInt: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      },

    handleDice: function (evt) {
        evt.preventDefault();

        // ! récupérer le perso qui joue pour connaitre son min et max au dé

        let diceResult = run.getRandomInt(0,6);
        console.log(diceResult);

        // ! appeler la fonction qui fait avancer le personnage

        // ! appeler la fonction qui compare si on est sur la meme case

        // ! appeler la fonction  qui gère le combat si on est sur la même case

    }



}


document.addEventListener('DOMContentLoaded', run.init);

