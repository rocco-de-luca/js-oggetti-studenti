/********************
*      jQuery       *
*    handlebars     *
*       chat        *
*********************/

$(document).ready(function () {
    //refs
    var input = $(".mess.input");
    var button = $(".mess-btn");
    var chat = $(".chat");

    //ottieni html da usare
    var source = $("#message-template").html();
    //console.log(source);

    //genera una utility handlebar
    var template = Handlebars.compile(source);
    //console.log(typeof(template));

    //ottengo html 
    var source = $('#message-template').html();
    var template = Handlebars.compile(source);

    var chat = [
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
    
    for (var i = 0; i < chat.length; i++) {
        var mess = chat[i];
        var data = {
            testo: ('.mess'),
            tempo: ('.time'),
            userClass: 'sent'
        }
        var output = template(data);
        $('.chat').append(output);
    }

    //invio alla pressione di Enter
    input.keypress(function (e) {

        if (e.which == 13) {
            aggiungiChat();
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






