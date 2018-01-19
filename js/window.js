jQuery(document).ready(function($) {
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww < 600) {
      $('.test').removeClass('blue');
    } else if (ww >= 601) {
      $('.test').addClass('blue');
		console.log("hello");
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});