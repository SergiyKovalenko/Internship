$(document).on('click', 'button', function (e) {
    e.preventDefault();
    var city = $('#city').val();
    if (city.trim().length < 1) {
        $('.error').addClass('active');
        setTimeout(function () {
            $('.error').removeClass('active');
        }, 2000);
    } else {
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=d24585a3bfbf8b954b2b079c69e2caa6',
            success: function (data) {
                $('.city_weather').empty().css({'display':'none'});
                var list = data.list;
                for (var i = 0; i < 19; i += 2) {
                    $(".city_weather").append('<div class="city_block"><div class="block_top">' + list[i].dt_txt + '</div><div class="block_bottom"><img src="//openweathermap.org/img/wn/' + list[i].weather[0].icon + '@2x.png" alt="forecast" width="50" height="50"></div></div>');
                }
                $('.city_weather').fadeIn(1000).css({'display':'flex'});
            },
            error: function (data) {
                if (data.status == 404) {
                    $('.nocity').addClass('active');
                    setTimeout(function () {
                        $('.nocity').removeClass('active');
                        $('input').val('');
                    }, 2000);
                }
            },
        });
    }
});