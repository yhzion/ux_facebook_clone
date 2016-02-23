$(function(){

    var imgIdx = 0;

    var moreLoad = function() {
        for(var i=0 ; i<5 ; i++) {
            $.ajax({
                url: "https://www.randomtext.me/api/gibberish/p-1/25-75",
                dataType:"json",
                data: {
                    a: 1
                }
            }).done(function(result) {
                var template = $('div.item:first-child').clone().show();
                template.find('img.scaledImageFitWidth').attr('src','https://lorempixel.com/470/313?a='+ imgIdx++);
                template.find('.item_body_text').html(result.text_out);

                $.ajax({
                    url: 'https://randomuser.me/api?a='+i,
                    dataType: 'json',
                    success: function(data){
                        template.find(".profile_name").text(data.results[0].user.name.first);
                        template.find(".profile_pic img").attr("src",data.results[0].user.picture.thumbnail);
                        $('div.items').append(template);
                    }
                });


            });


        }
    };

    moreLoad();

    $(window).scroll(function(){
        if  ($(window).scrollTop() == $(document).height() - $(window).height()){
            moreLoad();
        }
    });

    $('#chat_header').click(function(){
        if(!$('chat').hasClass('chaton')) {
            $('chat').addClass('chaton');
            $('.text_field').focus();
        } else {
            $('chat').removeClass('chaton');
        }
    });

});