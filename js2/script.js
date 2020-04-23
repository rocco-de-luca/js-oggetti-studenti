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

    //inserisci nuovo mess
    button.click(function() {
        var message = input.val();
      // console.log(message);
    
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
        setTimeout(function(){
            var data = {
                text: "ok bro",
                time: '15:16',
                userClass: 'received'
            };

            var html = template(data);

            chat.append(html);

        }, 1000);



    });
    
});
