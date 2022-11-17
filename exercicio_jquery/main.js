$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault();

        const tarefa = $('#tarefa').val();
        const novaTarefa = $('<li></li>');

        $(novaTarefa).html(tarefa);
        $(novaTarefa).appendTo('ol');
        $('#tarefa').val('');

        $('li').click(function() {
            $(this).css('text-decoration', 'line-through');
        })
    })

})
