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
});
  