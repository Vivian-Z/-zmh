/**
 * Created by zzzz on 2017/8/22.
 */
window.onload=function () {
    $(function () {
        $(".S-nav li").hover(
            function () {
                $(this).children('div').slideDown();//导航下的每一个div下拉出现
                $(this).children('div').find('.S-zleft ul').addClass('fadeLeft');//找到div里面左边的包着ul的盒子给ul加class  fadeLeft
            }, function () {
                $(this).children('div').stop(true, true);//动画直接全部完成
                $(this).children('div').find('.S-zleft ul').removeClass('fadeLeft');//删除class  fadeLeft
                $(this).children('div').hide();//让导航下的每一个div下拉隐藏
            }
        );
    });
    var clrfix = document.querySelectorAll(".clrfix>li");
    for (var i = 0; i < clrfix.length; i++) {
        clrfix[i].index = i;
        clrfix[0].children[0].children[0].style.backgroundColor = "#B60005";
        clrfix[i].onclick = function () {

            for (var j = 0; j < clrfix.length; j++) {
                clrfix[j].children[0].children[0].style.display = 'block';
                clrfix[j].children[0].children[0].style.backgroundColor = "#f1f1f1";
                $(this).children('div').hide();
            }
            this.children[0].children[0].style.backgroundColor = "#B60005";
        }
    };

    //轮播
    var width1 =1160;
    var speed1 = 1000;
    var now1 = 0;
    var max1 =2;
    var $imgs1 = $('.reseach_img ul');
    $imgs1.find('li:first').clone().appendTo($imgs1);
    function changeNext1(){
        $imgs1.animate({
            'left':-width1*now1+'px'
        },speed1)
    }
    function changeFirst1(){
        $imgs1.animate({
            'left':-width1*(max1+1)+'px'
        },speed1,function(){
            $(this).css('left',0)
        })
    }
    function changeAuto1(){
        if(!$imgs1.is(':animated')){
            if(now1<max1){
                now1+=1;
                changeNext1()
            }else{
                now1=0;
                changeFirst1()
            }
        }
    }
    $('.prev').click(function(){
        if(!$imgs1.is(':animated')){
            if(now1<=0){
                now1=max1;
                $imgs1.css({
                    'left':-width1*(max1+1)
                })
            }else{
                now1--
            }
            changeNext1();
        }
    });
    $('.next').click(function(){
        changeAuto1()
    });

   //选项卡
    $(function(){
        var oLi=$('.section5-list li');
        oLi.click(function(){
            var index=$(this).index();
            oLi.removeClass('active').eq(index).addClass('active');
            $('.section5-detail div').removeClass('active').eq(index).addClass('active');
        })
    })

};