$(document).ready(

    //% DOM Manipulation

    //# text()
    /* $('#get-text').click(() => {
        let text = $('.paragraph').text();
        console.log(text);
    }), */

    /* $('#add-text').click(() => {
        let text = $('.paragraph > strong').
        text("<h2 style='color:red'>Elemento aggiunto da jQuery</h2>");
    }), */


    //# html()
    /* $('#get-element').click(() => {
        let element = $('.paragraph').html();
        console.log(element);
    }), */


    /* $('#add-element').click(() => {
        $("#empty").html("<h2 style='color:red'>Elemento aggiunto da jQuery</h2>");
    }), */



    //# prepend()
    /* $('#add-element').click(() => {
        $(".paragraph").prepend("<em style=\"color: blue\">Contenuto precedente aggiunto</em>");
    }), */


    //# append()
    /* $('#add-element').click(() => {
        $(".paragraph").append("<em style=\"color: blue\">Contenuto extra aggiunto</em>");
    }), */


    //# before()
    /* $('#add-element').click(() => {
        $(".paragraph").before("<p style=\"color: blue\">Contenuto precedente aggiunto</p>");
    }), */


    //# after()
    /* $('#add-element').click(() => {
        $(".paragraph").after("<p style=\"color: blue\">Contenuto aggiunto successivamente</p>");
    }), */


    //# remove()
   /*  $('#remove-element').click(() => {
        $(".paragraph").remove();
    }), */

    /* $('#remove-element').click(() => {
        $(".paragraph, h1").remove();
    }), */


    //# empty()
   /*  $('#remove-element').click(() => {
        $(".paragraph, h1").empty();
    }), */


    //# val()
    /* $('#input-text').keydown(() => {
        let inputValue = $('#input-text').val();
        console.log(inputValue)
    }), */

    /* $('#select').click(() => {
        let value = $('#select').val();
        console.log(value)
    }), */

    /* $('#select').click(() => {
        $('#input-text').val('Valore iniettato');
    }), */


    //# attr()
    /* $('a').click((e) => {
        e.preventDefault();
        let hrefVal = $('a').attr('href');
        console.log(hrefVal);
    }), */

    /* $('a').click((e) => {
        e.preventDefault();
        $('a').attr('class', 'add-class');
    }), */


    //# removeAttr()
    /* $('a').click((e) => {
        e.preventDefault();
        $('a').removeAttr('class');
    }), */


    //# prop()
    /* $("#checkbox").click(() => {
        let isChecked = $('#checkbox').prop('checked');
        isChecked ? console.log("la checkbox è stata selezionata")
        : console.log("la checkbox è stata deselezionata") ;
    }), */

    /* $("#checkbox").click(() => {
        $('#input-text').prop('disabled', true);
    }), */


    //# is()
    //console.log($('a').is('.add-class')), // false


);
