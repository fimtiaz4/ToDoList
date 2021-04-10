$(document).ready(function () {
    $('.input_form').on('keyup', function (e) {
        if (e.keyCode == 13 && $('.input_form').val() != '') {
            var task = $('<div class="task"></div>').text($('.input_form').val());


            var del = $('<i class=" fa fa-trash r"></i>').click(
                function () {
                    var p = $(this).parent();
                    p.fadeOut(function () {
                        p.remove();
                    })
                });


            var ok = $('<i class=" fa fa-check g"></i>').click(
                function () {
                    var p = $(this).parent();
                    p.fadeOut(function () {
                       $('.completedTask').append(p);
                       p.fadeIn();
                    });
                    $(this).remove();
                });
 


    task.append(del , ok);
    $('.taskToDo').append(task);
    $('.input_form').val('');

}


    });
});