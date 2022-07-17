const app = {

    init: function() {
        
        // le formulaire des choix des joueurs
        let playerForm = document.querySelector('.choose_player_form');
        playerForm.addEventListener('submit', app.handleSubmitPlayers);

    },

    // méthode qui évalue les erreurs en JS en surcouche du html 5 
    // le reste (falsification dans la console par exemple) est géré dans le php
    checkErrors: function () {
        let nomJ1 = document.querySelector('#nomJ1').value;
        let nomJ2 = document.querySelector('#nomJ2').value;

        if (nomJ1.length < 3) {
            return "false j1";
        }

        if (nomJ2.length < 3) {
            return "false j2";
        }
    },

    //Ecouteur d'événement du formulaire
    handleSubmitPlayers: function (evt) {

        let error = false;

        // test les erreurs eventuelles 
       let checkResult = app.checkErrors();
       
        if (checkResult === "false j1") {
            error = true 
            document.querySelector('#erreurNameJ1').innerHTML = "Le nom du joueur doit comporter au moins 3 lettres";
            // return document.querySelector('#erreurNameJ1').innerHTML = "Tu n'as pas rempli le nom du joueur";
        }
        else if (checkResult === "false j2") {
            error = true
            document.querySelector('#erreurNameJ2').innerHTML = "Le nom du joueur doit comporter au moins 3 lettres";
        }
      
        if (error == true) {
          evt.preventDefault();  
        } 
    },
}

document.addEventListener('DOMContentLoaded', app.init);