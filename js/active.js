$(document).ready(function() {
    $('.access').click(function() { $(this).addClass('active'); });
    $('#searchIcon').click(function() { $('.access').removeClass('active'); }); });


// addClass = stay longer
// toggleClass = onclick close/open

//$(document).ready(function() { $('.link').click(function() { $(this).toggleClass('active'); }); }); 