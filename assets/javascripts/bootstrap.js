$('[data-toggle]').each(function() {
    var target = ''
        , collapsed = true;
    if($(this).attr('data-toggle') == 'inline') {
        target = $(this).parent().find('.collapsible');
    } else {
        target = $(this).attr('data-toggle');
        target = $(target);
    }

    if($(this).hasClass('collapsed')) {
        target.addClass('collapsed');
    } else {
        collapsed = false;
    }

    $(this).click(function() {
        if(collapsed) {
            var height = target.children('ul').height();
            target.height(height);
            $(this).addClass('in');
        } else {
            target.height(0);
            $(this).removeClass('in');
        }

        collapsed = !collapsed;
        return false;
    });
});