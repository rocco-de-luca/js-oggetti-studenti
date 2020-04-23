/********************
*      jQuery       *
*    handlebars     *
*       chat        *
*********************/

$(document).ready(function () {
    //ottieni html da usare
    var source = $("entry-template").html();
    //genera una utility handlebar
    var template = Handlebars.compile(source);
    //console.log(typeof template);

    /*  var data = {
    title: "my single post",
    body: "lorem ipsum" 
    }

    var html = template(data);
    console.log(html);

    $('.articles').append(html);
*/
    for (var i = 0; i < 10; i++) {
        var data = {
            title: "post numero" + (i + 1),
            body: "this is the post with the number" + (i + 1)
        }

        var html = template(data);
        console.log(html);

        $('.articles').append(html);
    }

});