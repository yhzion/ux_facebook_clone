$(function () {

    var random_number = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };


    var imgIdx = 0;

    var moreLoad = function () {
        for (var i = 0; i < 5; i++) {
            $.ajax({
                url: "https://www.randomtext.me/api/gibberish/p-1/25-50",
                dataType: "json",
                data: {
                    a: i
                }
            }).done(function (result) {
                var template = $('div.item:first-child').clone().show();
                template.find('img.scaledImageFitWidth').attr('src', 'http://lorempixel.com/470/313?a=' + imgIdx++);
                template.find('.item_body_text').html(result.text_out);
                template.find('.item_body_stat span.like').text(random_number(1, 500) + " Likes");
                template.find('.item_body_stat span.share').text(random_number(1, 500) + " Share");
                template.find(".profile_pic img").attr("src", 'http://lorempixel.com/40/40?a=' + imgIdx++);
                template.find("span.minute").text(imgIdx + " mins");
                template.find(".profile_name").text(result.text_out.replace(/(<([^>]+)>)/gi, "").split(/\s+/)[0]);


                $('div.items').append(template);
            });
        }
    };

    moreLoad();

    var loadGroups = function () {
        for (var i = 0; i < 3; i++) {
            $.ajax({
                url: "https://www.randomtext.me/api/gibberish/p-1/5-8",
                dataType: "json",
                data: {
                    a: i
                }
            }).done(function (result) {
                var template = $('div.ad_groups div.ad_group:first-child').clone().show();
                console.log(template);
                template.find('.ad_group_image img').attr('src', 'http://lorempixel.com/252/152?a=' + imgIdx++);
                template.find('div.main_title').text(result.text_out.replace(/(<([^>]+)>)/gi, ""));
                template.find('div.sub_title').text(random_number(1, 500) + " members");

                $('div.ad_groups').append(template);
            });
        }
    };

    loadGroups();

    $(window).scroll(function () {
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
            moreLoad();
        }
    });

    $('#chat_header').click(function () {
        var chat = $('chat');
        if (!chat.hasClass('chaton')) {
            chat.addClass('chaton');
            $('.text_field').focus();
        } else {
            chat.removeClass('chaton');
        }
    });

});