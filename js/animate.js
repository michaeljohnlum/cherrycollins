$(document).ready(function(){

// Load hidden images //
	
$('img').show();


// Fade in Logo on page load //
	var x = 500;
	var y = x-100;
	
	
	$('#logo').animate({
	opacity:1,
	top:'50%',
	
	},x,'swing');
	
		$('#title').animate({
	opacity:1,
	top:'50%',
	
	},x,'swing');

	$('#navigation').animate({
	opacity:1,
	top:'50%',
	
	},x,'swing');

// Animate Logo and Navigation // 


	
        $(".nav-animate").click(function () {
            $("#logo").animate({
            width:'70px',
            left:'12%',
            marginLeft: '0px',
            top:'12px',
            marginTop:'0px'
         },x,'swing');
               
            $("#title").animate({
            width:'250px',
            left:'12%',
            marginLeft: '80px',
            top:'45px',
            marginTop:'0px'
         },x,'swing')   ;
        
        
        $("#navigation").animate({
     
            left:'12%',
            marginLeft: '360px',
            top:'55px',
            marginTop:'0px'
         },x,'swing')   
        });

// Animate Portfolio Sub-Navigation //

        $("#nav-portfolio").click(function () {
	        $('#portfolio-nav').show().delay(y).animate({
            marginTop:'0px',
            opacity:1,
         },300,'swing')   
        });
        
// Hide Portfolio Sub-Navigation //
        
        $(".hide-links").click(function () {
	        $('#portfolio-nav').animate({
            marginTop:'-20px',
            opacity:0,
         },300,'swing', function() {
	         $(this).hide();
         }) 
        });



})();
