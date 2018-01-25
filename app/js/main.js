
  $(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
     $('.carousel').carousel({
     	fullWidth: true,
     	indicators: true,
     	padding: 800,
     	dist: 100
     });
  });