var y=$(window).scrollTop();
console.log(y)
    if(y<100){
        $('.navbar').css({backgroundColor:"transparent"})
        $(".nav-link").css({color:"white",transition:"all .00001s"})
        $(".navbar-brand").css({color:"white",transition:"all .00000000001s"}) 
        $(".fa-bars").css({color:"white",transition:"all .00000000001s"})         
    }

   /*  $("body").css({maxWidth:'992px'},function(){
        $(".navbar-toggler").click(function(){
            $('.collapse').css({backgroundColor:"rgb(255,255,255)"});
            $('.navbar').css({backgroundColor:"rgb(255,255,255)"});
            $(".nav-link").css({color:"#007bff",transition:"all .00001s"})
            $(".navbar-brand").css({color:"#007bff",transition:"all .00000000001s"}) 

        })
    }) */
var advisorOffset=$(".advisor").offset().top;
$(window).scroll(function(){
    var x=$(window).scrollTop();
    if(x>advisorOffset){
        $('.navbar').css({backgroundColor:"rgb(255,255,255)",transition:"all 1.3s"});
        $(".nav-link").css({color:"#007bff",transition:"all 1s"})
        $(".navbar-brand").css({color:"#007bff",transition:"all 1s"})
    }
    else{
        $('.navbar').css({backgroundColor:"transparent",transition:"all 1s"})
        $(".nav-link").css({color:"white",transition:"all 1s"})
        $(".navbar-brand").css({color:"white",transition:"all 1s"})
    }

    if(x>advisorOffset){
        $('#up-btn').css({display:"inline-block"});
        $('.arrow').css({opacity:"1",transition:"all 1s"});
    }
    else{
        $('#up-btn').css({display:"none"});
        $('.arrow').css({opacity:"0",transition:"all 1s"});
    }
})


$("#up-btn").click(function(){
    $("html").animate({scrollTop:0},1000)

})

$("a").click(function(){
    var x= $(this).attr("href");
    var offsert=$(x).offset().top;
    $("html").animate({scrollTop:offsert},1000)

})
$(document).ready(function(){
    $("#loading").fadeOut(2000);
    $("body").css("overflow","auto");

})


