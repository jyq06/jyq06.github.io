$(function(){
    /* jQ */
    /* banner右边 手风琴 */
    $('.banner_right li').mouseenter(function(){
        addPaiTa($(this),'active')
    })
    /* 电子书右边 */
    $('.newbook .newbook_right>div').mouseenter(function(){
        addPaiTa($(this),'newbook_rightActive');
    })
    /* 独家提供 */
    $('.soloapply_top .solosapply_lis').mouseenter(function(){
        // console.log($(this).index())
        // console.log($('.soloapply .s_slidebox'));
        // '.solosapply_lis'
        addPaiTa($(this),'applyshow');
        addPaiTa($('.soloapply .s_slidebox').eq($(this).index()-1),'on')
    })
    function addPaiTa(t,classname,other = ""){
        /* 排他：删除除了当前元素之外所有具有.active的元素的类名 */
    /*     t.addClass(classname);
        t.siblings(other).removeClass(classname); */
        console.log(t.siblings(other));
        t.addClass(classname).siblings(other).removeClass(classname);
        // console.log(t.addClass(classname).siblings(other));
    }
    function leaveRemove(t,classname){
        t.removeClass(classname);
    }


    /* 猜你喜欢：换一批事件 */
    let num = 0; //记录点击事件
    $('.likebook>h4>p>span').click(function(){
        num++;
        if(num==3){
            num = 0;
        }
        let top = -(num*481);
        $('.likebook .likebookbox .movebox').animate({'top':top},500)
    })


    /* js */
    /* 电子书右边-手风琴 */
    let book_lis = document.querySelectorAll('.newbook .book_right ul li') ;
    let book_h3s = document.querySelectorAll('.newbook .book_right ul li>h3');
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


    /* 轮播图区域 */
    //主轮播图
    $("#bannerBox").tyslide({
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
    //独家提供轮播图轮播图
    $(".soloapply .pptbox").tyslide({
        boxh:518,//盒子的高度
        w:1200,//盒子的宽度
        h:518,//图片的高度
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
})