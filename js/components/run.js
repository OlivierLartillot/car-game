
const run = {

    casePlayer1: 0,
    caseplayer2: 0,


    init: function (array) {
        console.log('le run js est lancé');
        console.log('le player 1 est sur la case ' + run.casePlayer1);
        console.log(array);

        let casedepart = document.querySelector('#case0');
        let vehiculeJ1 = array[0].vehicule;
        let vehiculeJ2 = array[1].vehicule;
        casedepart.innerHTML = '<img src="./assets/images/img_marqueurs/'+vehiculeJ1+'_vers_droite.png" alt="Voiture '+vehiculeJ1+'" height="30px"/><img src="./assets/images/img_marqueurs/'+vehiculeJ2+'_vers_droite.png" alt="Voiture '+vehiculeJ2+'" height="30px"/>';
        let theDice = document.querySelector('#the_dice');
        theDice.addEventListener('submit', this.handleDice);
   
    },

    getRandomInt: function(max) {
        return Math.floor(Math.random() * max);
    },

    handleDice: function (evt) {
        evt.preventDefault();
        let diceResult = run.getRandomInt(6);
        console.log(diceResult);




    }



}


document.addEventListener('DOMContentLoaded', app.init);

