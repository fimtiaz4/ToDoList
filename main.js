$(document).ready(function () {
    $('.input_form').on('keyup', function (e) {
        if (e.keyCode == 13 && $('.input_form').val() != '') {
            var task = $('<li class="task"></li>').text($('.input_form').val());





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
                        $('.completedTask ol').append(p);
                        p.fadeIn();
                    });
                    $(this).remove();
                });

            var cbtn = $('.clearPending').click(
                function () {
                    var t = $(".taskToDo li").remove();
                    t.fadeOut(function () {
                        t.remove();
                    })
                });


            var cbtn = $('.clearCompleted').click(
                function () {
                    var t = $(".completedTask li").remove();
                    t.fadeOut(function () {
                        t.remove();
                    })
                });

            var cbtn = $('.clearEverything').click(
                function () {
                    var t = $("li").remove();
                    t.fadeOut(function () {
                        t.remove();
                    })
                });









            task.append(del, ok);
            $('.taskToDo ol').append(task);

            $('.input_form').val('');

        }








    });


});
