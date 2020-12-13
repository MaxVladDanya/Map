$(document).ready(function(){
    $('.block-form__arrow').click(function(event){
        $('html').animate({ 
    	    scrollTop: $(".block-form__form").offset().top 
        }, 500 );
    });    

    $('.block-filter__mob').click(function(){
        $('.block-filter').toggle("block-filter");
    });

});
     
