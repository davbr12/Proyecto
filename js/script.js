$(document).ready(function(){

    $("#banner").css({"height":$(window).height() + "px"});

    var flag = false;
    var scroll;

    $(window).scroll(function(){
        scroll = $(window).scrollTop();

        if (scroll>200) {
            $("#logo").css({"margin-top":});
        }
    });
});