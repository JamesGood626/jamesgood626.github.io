$("document").ready(function(){
  var $initialWindowWidth = $(window).width();
  var initialShift = "-" + $initialWindowWidth + "px"    
  var $overlay = $('<div class="overlay"></div>');
  var $content = $('<div class="content"></div>');    
  var $aboutContent = $('<div class="about-content">\
                         <h1 class="modalH1">About</h1>\
                         <p class="modalP">Experience in creating responsive mobile friendly websites,\
                         PSD to HTML conversion, and adding JavaScript interactivity to your website.</p></div>');
  var $contactContent = $('<div class="contact-content">\
                          <h1 class="modalH1">Contact</h1>\
                          <p class="modalP">Email: jamesgood626@gmail.com</p></div>');
  var $gobackbtn = $('<div class="go-back-btn">Go Back</div>'); 
    
  $($overlay).appendTo("body").hide();
  $($content).appendTo($overlay).hide();
  $($aboutContent).appendTo($content).hide();
  $($contactContent).appendTo($content).hide();
  $($gobackbtn).appendTo($overlay).hide();
  
  //Used for slide right animation
  $('.overlay').css({left: initialShift});
    
  var showOverlay = function () {
        $($overlay).show();
        $('.overlay').animate({left: 0}, 150);
        $($content).show();
        $($gobackbtn).show();
  } 
  
  var hideOverlay = function () {
        $($overlay).hide();
        $('.overlay').css({left: initialShift});
        $($content).hide();
        $($gobackbtn).hide();
  } 
    
       
  $(".modal-menu-item").click(function(event){
    event.preventDefault();
    var that = $(this); 
      if($('#toggler').is(':checked')) {
          $('#toggler').prop('checked', false);
      }
      
      if(that.hasClass('about')) {
          showOverlay();
          $($aboutContent).show(); 
      }
      else if(that.hasClass('contact')) {
        showOverlay();
        $($contactContent).show();
      }  
  });  
      
    
//    Prevents content block from triggering $($overlay || $button)
//    click event.
  $($content).click(function(event) {
    event.stopPropagation(); 
  });
     
              
  $($overlay  || $button).click(function(event) {
    var target = $(event.currentTarget);    
      if ($(window).width() <= 768) {
        $('#toggler').prop('checked', true); 
        hideOverlay();
        $($aboutContent).hide(); 
        $($contactContent).hide();
      }
      else { 
        $('.overlay').css({left: initialShift});
        hideOverlay();
        $($aboutContent).hide(); 
        $($contactContent).hide(); 
      }
  });
    
//Fixes the issue of the menu still being open
//if the window is resized to be greater than 768px
  $(window).resize(function() {
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(function(){
      if($(window).width() > 768) {      
        $('#toggler').prop('checked', false);
      }
    }, 250);
  });
    
      
});