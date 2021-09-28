$(function(){
    /* jQuery */
    /* 选项卡：当鼠标移入时，显示对象的子菜单 */
    /* banner鼠标移入时显示 */
    /*$('.banner .banner_left>.banner_leftLi').mouseenter(function(){       
        addPaiTa($(this),'active');
    }); */
    /*鼠标移出时删除类名*/
    $('.banner .banner_left>.banner_leftLi').mouseleave(function(){
        leaveRemove($(this),'active');
    });
    /* 电子书二级菜单*/
    $('.book .book_left .book_display').mouseenter(function(){
        addPaiTa($(this),'bookActive');
    });
    /* 电子书右边 */
    /* $('.book .book_right ul li').mouseenter(function(){
        addPaiTa($(this),'book_show');
        $(this).find('h3').addClass('title_hidden');
        $(this).siblings().find('h3').removeClass('title_hidden');  
    }) */
    /* 服装 童装 户外运动*/
    $('.like .like_top .like_li').mouseenter(function(){
        addPaiTa($(this),'like_active');
    })
    /*   $('.like .like_top .like_li').mouseleave(function(){
        leaveRemove($(this),'like_active')
    }) */
    function addPaiTa(t,classname){
        /* 排他：删除除了当前元素之外所有具有该元素的类名 */
        t.siblings().removeClass(classname);
        t.addClass(classname);
    }
    function leaveRemove(t,classname){
        t.removeClass(classname);
    }
    /* js */
    // banner
    let lis = document.querySelectorAll('.banner .banner_left>.banner_leftLi')
    for(let i = 0;i<lis.length;i++){
        /* 移入 高亮 显示 */
        lis[i].addEventListener('mouseenter',function(){
            for(let j = 0;j<lis.length;j++){
                lis[j].classList.remove('active');
            }
            this.classList.add('active');
        })
        /* 移出 取消高亮 显示*/
        lis[i].addEventListener('mouseleave',function(){
            for(let j = 0;j<lis.length;j++){
                lis[j].classList.remove('active');
            }
        })
    }
    /* 电子书右边-手风琴 */
    let book_lis = document.querySelectorAll('.book .book_right ul li') ;
    let book_h3s = document.querySelectorAll('.book .book_right ul li>h3');
    for(let i = 0;i<book_lis.length;i++){ 
        book_lis[i].addEventListener('mouseenter',function(){
            for(let j = 0;j<book_lis.length;j++){
                book_lis[j].classList.remove('book_show');
                book_h3s[j].classList.remove('title_hidden');
            }
            this.classList.add('book_show');
            this.querySelector('h3').classList.add('title_hidden');
        })
    }
    /* 固定首行 */
    // 0级事件   滚动条滚动时触发
    window.onscroll = function(){
        if(window.scrollY > 1000){
            /* stop():是否清除动画队列
               $('#fixedHead').slideDown(500);当多次进行滚动条滚动时，后面的动画将不受控制一致在显示
            */
            $('#fixedHead').stop().slideDown(500);
        }
        else{
            $('#fixedHead').stop().slideUp(500);
        }
    }

    /* 楼层滚动 */
    // 把li中每一个需要点亮的背景色放到数组中
    let bgc_arr = ["red","#f60","green","blue","pink"];
    /* 1.鼠标移入时点亮图标与背景颜色 */
    // 合成事件：移入移出
    $("#floorbox li").hover(
        /* 移入事件 */
        function(){
            $(this).css({
                /* 当鼠标移入时设置当前li的宽度，使右边区域可以显示，并且设置背景图片的偏移量，使图片点亮 */
                "width":"80px",
                "color":"#fefefe",
                "background-position-x":"-40px",
                // 根据当前li的索引 拿到对应的背景色
                "background-color":bgc_arr[$(this).index()]
            })
        },
        /* 移出事件 */
        function(){
            $(this).css({
                /* 当设置样式为空时，则还是原来的样式 */
                "width":"",
                "color":"",
                "background-position-x":"",
                "background-color":""
            })
        }
    )
    /* 2.鼠标点击时页面滚动到当前图标指定的位置上 */
    $("#floorbox li").click(function(){
        // 获取目标在页面中的距离
        let target_distance=$('.floor')[$(this).index()].offsetTop;
        // 
        $("html,body").animate({"scrollTop":target_distance},2000) //慢慢过去
    }) 

    /* 首页轮播图区域 */
     //主轮播图
     $("#bannerInner").tyslide({
        boxh:420,//盒子的高度
        w:1000,//盒子的宽度
        h:390,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:0,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:20,//控制按钮高度
        radius:10,//控制按钮圆角度数
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
        isShowNum:true //是否显示数字
    });
    
    function areaSlider(areaSelector,box_h,box_w,picture_h){
        $(areaSelector).tyslide({
        boxh:box_h,//盒子的高度
        w:box_w,//盒子的宽度
        h:picture_h,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:15,//控制按钮宽度
        controlsH:5,//控制按钮高度
        radius:0,//控制按钮圆角度数
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
        isShowNum:false //是否显示数字
    });
    }
    //服装书轮播图
    areaSlider("#cloth .pptbox",335,439,335);
    //电子书轮播图
    areaSlider("#book .pptbox",219,332,219);
    //户外运动轮播图
    areaSlider("#child .pptbox",336,437,336);
    //童装轮播图
    areaSlider("#sport .pptbox",336,437,336);
})