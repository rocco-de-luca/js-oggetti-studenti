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
    // refs
    var input = $(".mess-input");
    var button = $(".mess-btn");
    var chat = $(".chat");

    var source = $("#message-template").html();
    //console.log(source);

    // utility hundlebars
    var template = Handlebars.compile(source);
    //console.log(typeof template);

    var mess = [
        {
            testo: 'ciao, come stai?',
            tempo: '10:00',
            userClass: "message-sent"
        },
        {
            testo: 'bene, grazie tu?',
            tempo: '10:05',
            userClass: "message-received"
        },
        {
            testo: 'bene',
            tempo: '10:10',
            userClass: "message-sent"
        },
    ];

    for (var i = 0; i < mess.length; i++) {
        var messaggi= template(mess[i]);
        console.log(messaggi);
        chat.append(messaggi)

          
    }

    // inserisci nuovo messaggio
    button.click(function () {
        var message = input.val().trim();
        console.log(message);

        // dati dinamici per template handelbars
        var data = {
            text: message,
            time: "15:15",
            userClass: "message-sent"
        };

        var html = template(data);
        console.log(html);

        chat.append(html)

        input.val("");

        // risposta automatica

        setTimeout(function () {
            var data = {
                text: "ok bro",
                time: "15:16",
                userClass: "message-received"
            };

            var html = template(data);
            console.log(html);

            chat.append(html)

        }, 1000);

    });

});
