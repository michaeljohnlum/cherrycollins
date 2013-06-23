$(function(){

// Animate Logo and Navigation // 
	
      $('.ajax-link').click(function(){
	      var url = $(this).attr('href');
	      $('#content').load(url);
	      return false;
});

// Load Gallery // 

      $(document).on('click', '.gallery-link',function(e){
	      var url = $(this).attr('href');
	      $('#gallery').load(url).animate({
		      height:'396px',
	
		      },500,'swing');
		      
	// Close button //	      
	
		      $('#close').fadeIn(500);
		      
	      return false;
	      
});

// Hide Gallery //        
        
     $(".gallery-close").click(function () {
            $("#close").fadeOut();
             $('#gallery').animate({
		      height:'0px',
	
		      },500,'swing');
});


})();
