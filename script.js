$(document).ready(function(){
    $('#header2_1 li').mouseover(function(){
     $(this).children('#header_sub').stop().slideDown(500)
    })
    $('#header2_1 li').mouseout(function(){
     $(this).children('#header_sub').stop().slideUp(500)
    })
    $('#slideUp>button').click(function(){
     $('#slideUp').slideUp();
    })
    //팝업
    $('#hide>button').click(function(){
     $('#hide').hide();
    })

    $('#header3_h').click(function(){
     $('#header3').animate({'top':'-113px'},300,function(){
         $('#header3_wrap').hide() });
    })
    //슬라이드
    $('#slide_btn>li').click(function(){
        $(this).css({'background-color':'#fff'}).siblings().css({'background':'rgba(192,188,188,0.5)'})
        slide_num = $(this).index() * -100
        $('#slide_ul').animate({left:slide_num+"%"})
    })
    setInterval(function(){
        if(slide_num <= -400){slide_num = 0
            $('#slide_ul').css({left:0},500)
            $('#slide_btn>li').eq(0).css({'background-color':'#fff'}).siblings().css({'background':'rgba(192,188,188,0.5)'})
        }
         slide_num = slide_num - 100     
         $('#slide_ul').animate({left:slide_num+'%'},500)
         slide_num2 = slide_num/-100
         if(slide_num2 == 4){slide_num2 = 0}
         $('#slide_btn>li').eq(slide_num2).css({'background-color':'#fff'}).siblings().css({'background':'rgba(192,188,188,0.5)'})
    },4000)

    slide_num = 0;
    speed = 100;
    $('#slide_next_btn').click(function(){
    if(slide_num <= -400){slide_num = 0
        $('#slide_ul').css({left:0},500)
        $('#slide_btn>li').eq(0).css({'background-color':'#fff'}).siblings().css({'background':'rgba(192,188,188,0.5)'})
    }
     slide_num = slide_num - speed 
     $('#slide_ul').animate({left:slide_num+'%'},500)
    
     if(slide_num == 4){slide_num = 0}
     slide_num2 = slide_num/-100
     $('#slide_btn>li').eq(slide_num2).css({'background-color':'#fff'}).siblings().css({'background':'rgba(192,188,188,0.5)'})
    })
    $('#slide_prev_btn').click(function(){   
        if(slide_num >= 0){ slide_num = -400
        $('slide_ul').stop().css({left:'-400'})
        }

     slide_num = slide_num + speed
     $('#slide_ul').animate({left:slide_num+'%'},500)
     $('#slide_btn>li').eq(slide_num/-100).css({'background-color':'#fff'}).siblings().css({'background':'rgba(192,188,188,0.5)'})
    })
    //토글 
    toggle = 0 //열림
    $('#notice').click(function(){
        if(toggle == 0){ toggle = 1;
        $('#slide_toggle').stop().animate({right:-900},1600)
        $('#notice').attr({'src':'icons/icon-notice-pc.png'})
        }

        else if(toggle == 1){ toggle = 0;
        $('#slide_toggle').stop().animate({right:0},1600)   
        $('#notice').attr({'src':'icons/ximg.png'})
        }
      
    })

    //스크롤 
    $('#slide_toggle').delay(2000).animate({right:-900},1600)

    $('#fixed_icon img:nth-child(4)').click(function(){
         $('body,html').animate({scrollTop:0},300);
     })

     $('#page_down').click(function(){
        $('html,body').animate({scrollTop:1500})
     })

     //brands
     $('#brands_wrap>li:nth-child(2)>h3').mouseover(function(){
        $(this).siblings('div').show()
        $('#brands').attr({'url':'images/2slide3'})
     })

     //배경 바꾸기
     $('#brands_menu>li>h3').mouseover(function(){
        $(this).siblings('.b_sub').fadeIn()
        $(this).parents().siblings('li').children('.b_sub').fadeOut()      
     })

     brands_bg_num = Math.round( Math.random()*4 )  //0~3.999 - 0 1 2 3 4    
     $('#brands_bg>li').eq(brands_bg_num).stop().fadeIn().css({'transform':'scale(1.1)'})
     $('#brands_bg>li').eq(brands_bg_num).siblings().stop().fadeOut().css({'transform':'scale(1)'})

     $('#brands_menu>li>h3').mouseover(function(){
        brands_menu_num = $(this).parent().index()       
        $('#brands_bg>li').eq(brands_menu_num).stop().fadeIn().css({'transform':'scale(1.1)'})
        $('#brands_bg>li').eq(brands_menu_num).siblings().stop().fadeOut().css({'transform':'scale(1)'})
        $(this).siblings('.b_sub').children('h4').css({'margin-top':'10px','opacity':'1'})
        $(this).siblings('.b_sub').children('p').css({'margin-top':'40px','opacity':'1'})
        $(this).siblings('.b_sub').children('button').css({'margin-top':'40px','opacity':'1'})
        $(this).parents('li').siblings('li').children('.b_sub').children('h4').css({'margin-top':'40px','opacity':'0'})
        $(this).parents('li').siblings('li').children('.b_sub').children('p').css({'margin-top':'70px','opacity':'0'})
        $(this).parents('li').siblings('li').children('.b_sub').children('button').css({'margin-top':'70px','opacity':'0'})

     })
    
     //스크롤이벤트
     $(window).scroll(function(){
        sc=$(window).scrollTop()
        $('#scroll').text(sc)
        if(sc >= 1100){
            $('#brands_box>ul li h3').css({'opacity':'1'})
        }

     })
 })
