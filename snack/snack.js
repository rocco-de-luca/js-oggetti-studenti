/***************
 *    SNACK    *
 ***************/

 /**
 * jsnack 1 
 * Creare un oggetto palla che abbia le seguenti proprietà:
Nome = palla
Peso = 10
Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.

$(document).ready(function(){
  //object
    var palla = {
        name: "palla",
        peso: 10
    };
    console.log(palla);
    
  
  var newPeso = parseInt(prompt("inserisci peso"));
  
  palla["peso"] = newPeso;
  
  console.log(palla.peso);
  
});
*/

//jsnack2
/**
 * Creare un array di oggetti:
* Ogni oggetto descriverà una bici da corsa con le seguenti proprietà:
* nome e peso.
* Stampare a schermo la bici con peso minore.
 */
/*
$(document).ready(function(){
var biciDaCorsa = [
    {
        nome: "bici blu",
        peso: 15
    },
    {
        nome:"bici verde",
        peso: 20
    },
    {
        nome:"bici rossa",
        peso: 25
    }
];

var biciLeggera = bici[0];

for(var i = 0; i < biciDaCorsa.length; i++) {
    if(biciDaCorsa[i].peso < biciLeggera.peso){
        biciLeggera = bici[i];
    }
}

console.log(biciLeggera);

});
*/

/**
 * Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare (scelto da voi), le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti
 
$(document).ready(function(){
var squadra = [
    {
        nome: "Napoli",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Roma",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "Milan",
        puntiFatti: 0,
        falliSubiti: 0
    }
];

for (var i = 0; i < squadra.length; i++); {
    var item = squadra[i]

    item.puntiFatti = getRandom(0, 100);
    item.falliSubiti = getRandom(0, 100);

console.log(squadra);


    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min) + 1) + min;
    };

}

});
*/