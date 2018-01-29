
  $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal({
        inDuration: 400,
        opacity: .9
    });
     $('.carousel').carousel({
     	fullWidth: true,
     	indicators: true,
     	padding: 800,
     	dist: 100,
     });
     $(".button-collapse").sideNav();
  });

  $(document).ready(function() {
    $('a[data-target="menu"]').click(function() {
        var target = $(this).attr('href');
        $('a').removeClass('active');
        $(this).addClass('active');
        $('html, body').animate({ scrollTop: $(target).offset().top}, 700);
    });
});