const app = {

    init: function() {
        console.log('l\'app est bien initialisée !');

        // le submit du formulaire
        let submitForm = document.querySelector('.choose_player_form');
        submitForm.addEventListener('submit', app.handleSubmitPlayers);

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
        let vJ1 = document.querySelector('input[name=v1]:checked').value;
        let vJ2 = document.querySelector('input[name=v2]:checked').value; 
      
        if (nomJ1 == "") {
            return "false j1";
        }

        if (nomJ2 == "") {
            return "false j2";
        }

        let array = [
           {pseudo: nomJ1, perso: persoJ1, vehicule: vJ1 }, 
           {pseudo: nomJ2, perso: persoJ2, vehicule: vJ2 }
        ];

        return array;
    },

    handleSubmitPlayers: function (evt) {
        evt.preventDefault();
        console.log('Tu as cliqué sur le submit');

        // test les erreurs eventuelles 
       let checkResult = app.checkErrors();
       
        if (checkResult === "false j1") {
            return document.querySelector('#erreurNameJ1').innerHTML = "Tu n'as pas rempli le nom du joueur";
        }
        else if (checkResult === "false j2") {
            return document.querySelector('#erreurNameJ2').innerHTML = "Tu n'as pas rempli le nom du joueur";
        }

        //console.log(checkResult[0]);

        document.querySelector('#preparation_course').style.display = "none";
        document.querySelector('#course').style.display = "block";

        // si tout est bon tu retourne le tableau qui contient toutes les infos
        // voir si un tableau avec deux d objet ?
        let arrayInfos = [
            checkResult[0],
            checkResult[1]
        ]

        app.writePlayersInfos(arrayInfos[0].pseudo,arrayInfos[0].perso,arrayInfos[0].vehicule, arrayInfos[1].pseudo,arrayInfos[1].perso,arrayInfos[1].vehicule, );

        run.init(arrayInfos);

        return arrayInfos;
       
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