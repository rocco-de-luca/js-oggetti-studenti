/********************
*      jQuery       *
*    handlebars     *
*       chat        *
*********************/
/**
 *  Esercizio di oggi: Array e oggetti (chat con Handlebars)
Descrizione:
Estendere la chat fatta con handlebars inserendo i messaggi iniziali, 
visibili al caricamento della pagina, generati da un array di oggetti.
Gli oggetti conterranno proprietà come testo e orario
Usiamo Handlebars per la generazione anche di questi messaggi, 
come avete fatto ieri per i messaggi inseriti dall’utente
 */

$(document).ready(function () {
    //refs
    var input = $(".mess.input");
    var button = $(".mess-btn");
    var chat = $(".chat");

    //ottengo html 
    var source = $('#message-template').html();
    //genera una utility handlebar
    var template = Handlebars.compile(source);
    //console.log(typeof(template));

    var mess = [
        {
            testo: 'ciao, come stai?',
            tempo: '10:00'
        },
        {
            testo: 'bene, grazie tu?',
            tempo: '10:05'
        },
        {
            testo: 'bene',
            tempo: '10:10'
        },
    ];

    for (var i = 0; i < mess.length; i++) {
        var elementMess = $(".message-template p").clone();
        elementMess.prepend(mess.lenght[i]);
        chat.append(elementMess);
    }
    //invio alla pressione di Enter
    input.keypress(function (e) {

        if (e.which == 13) {
            addChat();
        }

    });
    //invio al click del bottone
    button.click(function () {

        addChat();
    });

    function oraAttuale() {
        var data = new Date();

        var ora = data.getHours();
        var minuti = data.getMinutes();

        if (minuti < 10) {
            minuti = '0' + minuti;
        }

        return ora + ':' + minuti;

    }

    //inserisci nuovo mess
    button.click(function () {
        var message = input.val();
        // console.log(message);
    });
    //dati dinamici per template handlerbars
    var data = {
        text: '.message',
        time: '15:15',
        userClass: 'sent'
    };

    var html = template(data);
    //console.log(html);

    chat.append(html);

    input.val('');

    //risposta automatica
    setTimeout(function () {
        var data = {
            text: "ok bro",
            time: '15:16',
            userClass: 'received'
        };

        var html = template(data);

        chat.append(html);

    }, 1000);

});






