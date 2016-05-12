/*
TODO
- Add fa icons to sections
- Add bio
- Format education
- Add/format hobbies
- Generate properly sized headshot image (200px)

*/

var offset = 60;
var shadow = 2;

$('body').scrollspy({
  target: '#nav',
  offset: offset
});

// http://stackoverflow.com/questions/9288482/how-do-i-set-the-offset-for-scrollspy-in-bootstrap
$('.navbar li a').click(function(event) {
  event.preventDefault();
  $($(this).attr('href'))[0].scrollIntoView();
  $(this).attr('href') == '#main' ? scrollBy(0, -window.innerHeight) : scrollBy(0, -(shadow-offset));
});