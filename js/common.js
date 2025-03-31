$(function(){
    const swiper = new Swiper('.visual', {
        loop: true,
        });

    swiper.on('slideChange', function () {
        var idx = swiper.realIndex;
        
            if(idx == '0'){
                color('#F17785');
            }else if (idx == '1'){
                color('#ABCD05');
            }
        });    

        function color(color){
            $('.gnb li').each(function(){
                if( $(this).hasClass('active')){
                    $(this).children('a').css('color',color);
                }
            });
        }
        const swiper2 = new Swiper('.thanks', {
            spaceBetween: 30,
            slidesPerView: 1.2,
        });

        const swiper3 = new Swiper('.review_slide', {
            spaceBetween: 30,
            slidesPerView: 1.7,
            breakpoints: {
                370: {
                    slidesPerView: 2,
                },
                500: {
                    slidesPerView: 2.7,
                },
                700: {
                    slidesPerView: 4,
                  },
            },
            pagination: {
                el: ".review_slide .paging",
              },
        });

        const swiper4 = new Swiper('.slide2', {
            spaceBetween: 30,
            slidesPerView: 2,
            
        });
});
  