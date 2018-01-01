$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > (1.8 * $(window).height())) {
                    $("body").css('background-color', '#34495e');
                } else if(scroll_pos > (0.8 * $(window).height())) {
                    $("body").css('background-color', 'white');
                } else {
                    $("body").css('background-color', '#53bef9');
                }
            });
        });
$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > (1.8 * $(window).height())) {
                    $("header").css('background-color', '#34495e');
                } else if(scroll_pos > (0.8 * $(window).height())) {
                    $("header").css('background-color', 'white');
                } else {
                    $("header").css('background-color', '#53bef9');
                }
            });
        });
$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > 0) {
                    $("header").css('box-shadow', '0px 0 10px rgba(0, 0, 0, 0.2)');
                } else {
                    $("header").css('box-shadow', '0px 0 10px rgba(0, 0, 0, 0.0)');
                }
            });
        });

$(document).ready(function(){       
            var scroll_pos = 0;
            $(document).scroll(function() { 
                scroll_pos = $(this).scrollTop();
                if(scroll_pos > (1.8 * $(window).height())) {
                    $("bar").css('color', '#ecf0f1;');
                } else {
                    $("bar").css('color', '#ecf0f1;');
                }
            });
        });

