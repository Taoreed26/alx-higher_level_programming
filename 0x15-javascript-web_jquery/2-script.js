// it uses the jQuery API to change the color of the red_header to red when clicked

$('div#red_header').click(function () {
  $('header').css('color', '#FF0000');
});
