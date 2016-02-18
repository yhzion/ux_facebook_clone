$(function(){


    var moreLoad = function() {
        setTimeout(function(){
            for(var i=0 ; i<5 ; i++) {
                $('div.items').append($('div.item:first-child').clone().show());
            }
        }, 300);
    };

    moreLoad();

    $(window).scroll(function(){
        if  ($(window).scrollTop() == $(document).height() - $(window).height()){
            moreLoad();
        }
    });

});
