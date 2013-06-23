$(function(){
$('.post img').each(function() {
 $(this).load(function() {
     
        var imagewidth = $(this).width(); 
         var imageheight = $(this).height(); 
        if(imagewidth > imageheight){
            $(this).width('auto'); 
            $(this).height('100%');  
                   }

        else{
             $(this).width('100%'); 
            $(this).height('auto');   
        }
    });
});
})();
