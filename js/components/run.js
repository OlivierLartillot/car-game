
const run = {

    casePlayer1: 0,
    caseplayer2: 0,
    


    init: function (array) {
        console.log('le run js est lancé');
        console.log('le player 1 est sur la case ' + run.casePlayer1);
        console.log(array);

        let nomPersoJ1 = array[0].perso;
        console.log('le perso choisi par le J1 est ' + nomPersoJ1)

        let casedepart = document.querySelector('#case0');
        let vehiculeJ1 = array[0].vehicule;
        let vehiculeJ2 = array[1].vehicule;
        casedepart.innerHTML = '<img src="./assets/images/img_marqueurs/'+vehiculeJ1+'_vers_droite.png" alt="Voiture '+vehiculeJ1+'" height="30px"/><img src="./assets/images/img_marqueurs/'+vehiculeJ2+'_vers_droite.png" alt="Voiture '+vehiculeJ2+'" height="30px"/>';
        let theDice = document.querySelector('#the_dice');
        theDice.addEventListener('submit', this.handleDice);

        
   
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


document.addEventListener('DOMContentLoaded', app.init);

