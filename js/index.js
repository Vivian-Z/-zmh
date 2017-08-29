/**
 * Created by zzzz on 2017/8/18.
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
    }
    ;

//    轮播
    var Focus=document.querySelector('.focus');
    var box = Focus.querySelector('.box');
    var li = box.querySelectorAll('li');
    var dot = Focus.querySelector('.dot');
    var dotLi = dot.querySelectorAll('li');
    var lbtn = Focus.querySelector('.lbtn');
    var rbtn = Focus.querySelector('.rbtn');

    var imgNum = 0;
    var moveNum = 20;
    var lastNum = 0;
    var aniTimer;
    var flag = true;
    var dotNum = 0;
    var autoTimer;
    // rbtn.onclick = function () {
    //     if (flag) {
    //         flag = false;
    //         if (imgNum >= li.length - 1) {
    //             box.style.marginLeft = '0px';
    //             imgNum = 0;
    //         }
    //         if (dotNum >= dotLi.length - 1) {
    //             dotNum = -1;
    //         }
    //         noBg();
    //         dotLi[dotNum + 1].style.backgroundColor = '#FED87F';
    //         animate(-1349);
    //         imgNum++;
    //         dotNum++;
    //     }
    // };

    // lbtn.onclick = function () {
    //     console.log('yyy');
    //     if (flag) {
    //         flag = false;
    //         if (imgNum <= 0) {
    //             box.style.marginLeft = -li[0].clientWidth*(li.length-1) + 'px';
    //             imgNum = li.length - 1;
    //         }
    //         if (dotNum <= 0) {
    //             dotNum = dotLi.length;
    //         }
    //         noBg();
    //         dotLi[dotNum - 1].style.backgroundColor = '#FED87F';
    //         animate(1349);
    //         imgNum--;
    //         dotNum--;
    //     }
    // };

    for (var i = 0; i < dotLi.length; i++) {
        dotLi[i].index = i;
        dotLi[i].onclick = function () {
            if (flag) {
                flag = false;
                noBg();
                if (imgNum >= li.length - 1) {
                    lb.style.marginLeft = '0px';
                    imgNum = 0;
                }
                this.style.backgroundColor = '#FED87F';
                if (this.index - dotNum >= 0) {
                    animate(-1349 * (this.index - dotNum));
                } else {
                    animate(-1349* (this.index - dotNum));
                }
                dotNum = this.index;
                imgNum = this.index;
            }
        }
    }
    autoPlay();
    function autoPlay() {
        autoTimer = setInterval(function () {
           // rbtn.onclick();
        }, 1000)
    }

    Focus.onmouseover = function () {
        clearInterval(autoTimer);
    };
    Focus.onmouseout = function () {
        autoPlay();
    };

    function animate(distance) {
        var everyMove = distance / moveNum;
        aniTimer = setInterval(function () {
            if (lastNum >= moveNum) {
                clearInterval(aniTimer);
                lastNum = 0;
                flag = true;
                return;
            }
            var ML = parseFloat(getComputedStyle(box).marginLeft);
            box.style.marginLeft = ML + everyMove + 'px';
            lastNum++;
        }, 17)
    }

    function noBg() {
        for (var i = 0; i < dotLi.length; i++) {
            dotLi[i].style.backgroundColor = '#fff';
        }
    }
}