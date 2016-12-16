$(document).ready(function(){

   document.getElementById("navMenu").innerHTML =
    '<nav class="navbar navbar-default navbar-fixed-top"'+
    '<div class="container-fluid">'+
    '<div class="navbar-header">'+
    '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">'+
    '<span class="sr-only">Toggle navigation</span>'+
    '<span class="icon-bar"></span>'+
    '<span class="icon-bar"></span>'+
    '<span class="icon-bar"></span>'+
    '</button>'+
    '<a class="navbar-brand" id="floating-brand" href="index.html">taranamol kaur</a>'+
    '</div>'+
    '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">' + 
    '<ul class="nav navbar-nav navbar-right">' + 
    '<li><a href="designindex.html">projects</a></li>' + 
    // '<li><a href="devindex.html">developer</a></li>' + 
    '<li><a href="writer.html">writings</a></li>' + 
    '<li><a href="pdfs/kaur_resume.pdf" target="_blank">resume</a></li>' + 
    '</ul>' + 
    '</div>'+
    '</div>'+
    '</nav>';

   document.getElementById("footerMenu").innerHTML =
    '<div class="contactpage">'+
    '<div id="footer">'+
    '<div class="container">'+
    '<h2> contact taranamol | '+
    '<a href="mailto:tarskaur@gmail.com" target="_blank"> email </a> |'+
    '<a href="https://www.linkedin.com/in/taranamolkaur" target="_blank"> linkedin </a> |'+
    '<a href="https://github.com/taranamol" target="_blank"> github</a> </h2>'+
    '</div>'+
    '</div>'+
    '</div>';


$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 400) {
    $('.indexNav .navbar-brand').fadeIn();
  } else {
    $('.indexNav .navbar-brand').fadeOut();
  }
});

});