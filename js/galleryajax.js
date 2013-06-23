$(function(){

// Load Gallery // 

      $('.gallery-link').click(function(){
	      var url = $(this).attr('href');
	      $('#gallery').load(url);
	      return false;
});



})();
