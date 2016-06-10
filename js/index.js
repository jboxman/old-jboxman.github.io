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
    var $el = $(this);
    var href = $el.attr('href');
  event.preventDefault();
  $($el.attr('href'))[0].scrollIntoView();
  if(href == '#main') {
    scrollBy(0, -window.innerHeight);
  }
  else {
    scrollBy(0, shadow-offset);
    $('.navbar li').removeClass('active');
    $('[href=' + href + ']').parent().addClass('active');
  }
});