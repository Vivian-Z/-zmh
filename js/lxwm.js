/**
 * Created by zzzz on 2017/8/27.
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
    //选项卡
    // $(function(){
    //     var oLi=$('.section5-list li');
    //     oLi.click(function(){
    //         var index=$(this).index();
    //         oLi.removeClass('active').eq(index).addClass('active');
    //         $('.section5-detail div').removeClass('active').eq(index).addClass('active');
    //     })
    // })
    $(function(){
        var meau=$('.wrap .meau a');
        var jobs=$('.wrap .jobs');
        var contact=$('.wrap .contact');
        // var oLi=$('.section5-list li');
        meau.click(function(){
            var index=$(this).index();
            meau.removeClass('active').eq(index).addClass('active');
            $('.wrap .jobs').removeClass('active').eq(index).addClass('active');
        })
    })

}