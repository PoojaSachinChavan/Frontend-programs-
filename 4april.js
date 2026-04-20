// jQuery example - DOM manipulation and event handling

$(document).ready(function() {
    // Select elements
    const $button = $('#myButton');
    const $content = $('.content');

    // Event handler
    $button.on('click', function() {
        $content.toggleClass('hidden');
        $content.fadeToggle(300);
    });

    // AJAX request
    $('#loadData').on('click', function() {
        $.ajax({
            url: 'api/data',
            type: 'GET',
            success: function(data) {
                $content.html(data);
            },
            error: function(error) {
                console.log('Error:', error);
            }
        });
    });
});