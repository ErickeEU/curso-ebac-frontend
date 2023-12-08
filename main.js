$(document).ready(function(e){

let buttons = []

    $('form').on('submit', function(e){
        e.preventDefault()
        let input = $('form input')
        if (input.val().length >= 1) {
            let newRow = $('<li></li>')
            $(`<p>${input.val()}</p>
            <button type="button" class="unfinished"><img src="check.png" alt=""></button>`).appendTo(newRow)
            $(newRow).appendTo('ul')
        } else {
            alert('Digite o nome da tarefa')
        }
        $(input).val('')
    })

    $(document).on('click','button[type="button"]', function(e){
        e.preventDefault()
        console.log('adadadasddadffffafwfafswwf')
        if ($(this).hasClass('unfinished')){
            $(this).attr('class', 'finished');
            $(this).parent().addClass('textfinished');
        } else if ($(this).hasClass('finished')){
            $(this).attr('class', 'unfinished');
            $(this).parent().removeClass('textfinished');
            return
        } else {

        }
    })
})