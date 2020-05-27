$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>250){
            $("#scroll").fadeIn();
        }
        else{
            $("#scroll").fadeOut();
        }
    });

    $("#scroll").click(function(){
        $("html,body").animate({scrollTop: 0},1000);
        
    });
});










$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>50) {
            $(".header").css("padding","10px 0");
            $(".header").css("background-color","red");
        }
        else{
            $(".header").css("padding","25px 0");
            $(".header").css("background-color","transparent");
        }
    });
});