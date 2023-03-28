$(function() {
    let index=0;
    let sw=false;
    autoSlider();
    moveSlider(index);
    $('.control_button').click(function(){
        index=$(this).index();
        moveSlider(index+1);
    });
    $('.left_control').click(function(){
        index--;
        moveSlider(index);
    });
    $('.right_control').click(function(){
        index++;
        moveSlider(index);
    });
    //이미지 슬라이더 구현 함수
    function moveSlider(index) {
        if(index< 4 && index > 0){
            $('.right_control').fadeIn(500);
            $('.left_control').fadeIn(500);
        }
        if(index==4){
            $('.right_control').fadeOut(100);
            $('.left_control').fadeIn(500);
        }
        if(index==0){
            $('.left_control').fadeOut(100);
            $('.right_control').fadeIn(500);
        }
        $('.slider_panel').animate({
            left : -(index*503)
        },'slow');
        $('.control_button').removeClass('active');
        $('.control_button').eq(index).addClass('active');
    }
    function autoSlider(){
        auto=setInterval(function(){
            if(index<4 && sw==false){
                $('.right_control').trigger('click');
            }else{
                sw=true;
            }
            if(index > 0 && sw==true){
                $('.left_control').trigger('click');
            }else{
                sw=false;
            }
        },2500);
    }
});