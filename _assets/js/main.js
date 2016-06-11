function tags() {
  $('.tags h3').each(function() {
    var h3 = $(this).eq(0);
    var length = h3.next('ul').find('li').length;
    $(this).eq(0).append(
      $("<span>("+length+")</span>")
    );
  })

  $('.tags h3').click(function() {
    var h3 = $(this).eq(0);
    var ul = h3.next();
    if (ul.is(':visible')) {
      ul.slideUp(function(){
        h3.removeClass("active");
      });
    }
    else {
      ul.slideDown(function(){
        h3.addClass("active");
      });
    }
  });

  // highlight the one in the url
  var pos = $("h3#"+document.location.href.split('#')[1]);
  if (pos.length > 0) {
    pos.next().slideDown();
    pos.addClass("active");
  }
};


$(document).ready(function () {

	// network status
  window.addEventListener("online", function() {
		$(".network-status").fadeOut()
  }, true);

  window.addEventListener("offline", function() {
		$(".network-status").fadeIn()
  }, true);

  if ($(".directory.tags").length > 0) {
    tags();
  }

  $('.jump').click(function(e){
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'fast');
  });

  // prep [about]
  $("#header").after($("#about").hide());
  $('html, body').scrollTop(0); // jump to top if link #about

  // toggle [about]
  $('.title a.about').click(function(){
    if ($(this).hasClass("active")) {
      $("#about").slideUp("slow");
      $(this).removeClass("active");
    }
    else {
      $("#about").slideDown("slow");
      $(this).addClass("active");
    }
  });

});
