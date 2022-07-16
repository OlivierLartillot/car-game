const app = {

    init: function() {
        console.log('l\'app est bien initialisée !');

        // le submit du formulaire
        let checkForm = document.querySelector('.choose_player_form');
        
        checkForm.addEventListener('submit', app.handleSubmitPlayers);

    },

    checkErrors: function () {
        let nomJ1 = document.querySelector('#nomJ1').value;
        let nomJ2 = document.querySelector('#nomJ2').value;
        let erreurNameJ1 = document.querySelector('#erreurNameJ1');
        let erreurNameJ2 = document.querySelector('#erreurNameJ2');
        erreurNameJ1.innerHTML = "";
        erreurNameJ2.innerHTML = "";
        let persoJ1 = document.querySelector('input[name=persoJ1]:checked').value;
        let persoJ2 = document.querySelector('input[name=persoJ2]:checked').value;
        let vJ1 = document.querySelector('input[name=couleurVehiculeJ1]:checked').value;
        let vJ2 = document.querySelector('input[name=couleurVehiculeJ2]:checked').value; 
      
        console.log(nomJ1.length)

        if (nomJ1.length < 3) {
            return "false j1";
        }

        if (nomJ2.length < 3) {
            return "false j2";
        }

        let array = [
           {pseudo: nomJ1, perso: persoJ1, vehicule: vJ1 }, 
           {pseudo: nomJ2, perso: persoJ2, vehicule: vJ2 }
        ];

        return array;
    },

    handleSubmitPlayers: function (evt) {

        
        let error = false;
        console.log('Tu as cliqué sur le submit');

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

    writePlayersInfos:function (p1name,p1perso,p1vehicule, p2name, p2perso, p2vehicule ) {
        
        document.querySelector('#player1Name').innerHTML = p1name.toUpperCase();
        document.querySelector('#player2Name').innerHTML = p2name.toUpperCase();

        document.querySelector('#player1NomPerso').innerHTML = p1perso[0].toUpperCase() + p1perso.slice(1);
        document.querySelector('#player2NomPerso').innerHTML = p2perso[0].toUpperCase() + p2perso.slice(1);

        document.querySelector('#player1Voiture').innerHTML = '<img src="./assets/images/img_marqueurs/'+p1vehicule+'_vers_droite.png" alt="Voiture '+p1vehicule+'" height="30px"/>';
        document.querySelector('#player2Voiture').innerHTML = '<img src="./assets/images/img_marqueurs/'+p2vehicule+'_vers_droite.png" alt="Voiture '+p2vehicule+'" height="30px"/>';

    



    }




}

document.addEventListener('DOMContentLoaded', app.init);