$(function(){
     /* jQ版本 */

    /* 全选
        需求：单点击全选时，所有商品被选中
    */
    $('.allSelector').click(function(){
        // 将当前点击到的对象，获取它的checked的值，并将复制给.allSelector,.singleSelector的checked 的值
        $('.allSelector,.singleSelector').prop('checked',$(this).prop('checked'));
        sumAndNum();
    })
    /*需求：购物车商品数量达标时 ，全选框选中，否则就不选中 
    */
    $('.singleSelector').click(function(){
        // $('input:checked').length 获取拥有checked 的选择器的对象，再获取它的长度
        let num = $('input:checked').length;
        // 获取绑定事件的长度
        let length = $('.singleSelector').length;
        // 当num  length   的长度相等时，表示所有商品选中，次吃全选的checkbox 的checked为true 否则只要有一个商品没选就是false 
        if(num == length){
            $('.allSelector').prop('checked',true);
        }
        else{
            $('.allSelector').prop('checked',false);
        }
        sumAndNum();
    })

    /* + */
    $('.addbtn').click(function(){
        $(this).siblings('.reducebtn').css({
            'cursor':'pointer',
            'background-color':''
        })
        // 获取 input：text 对象的value值
        let num = $(this).prev().val();
        // 每点击一次就自增
        num++;
        // 再把值放入input：text 中
        $(this).prev().val(num);
        count(this,num);
        sumAndNum();
    })
    /* - */
    $('.reducebtn').click(function(){
        // 获取 input：text 对象的value值
        let num = $(this).next().val(); 
        num--;
        if(num>=1){
            $(this).next().val(num);
            count(this,num);
            sumAndNum();
            if(num==1){
                $(this).css({
                    'cursor':'not-allowed',
                    'background-color':' grey'
                })
            }
        }
    })

    /* 输入框按键事件：当鼠标直接在输入框里面输入数量时。对应的小计会变化 */
    $('.order .order_num .on_right .text').keyup(function(){
        let price = $(this).prev().prev().text();
        $(this).next().next().text((price*$(this).val()).toFixed(2));
        sumAndNum();
    })

    /* 小计 */
    function count(t,num){
        let sprice = $(t).closest('li').find('.sprice').text();
        $(t).closest('li').find('.ssum').text((num*sprice).toFixed(2));
    }

    /* 总和 与数量 */
    function sumAndNum(){
        let checked_arr = $('.singleSelector:checked');
        let num = 0;
        let sum = 0;
        for(let i = 0;i<checked_arr.length;i++){
            num += Number($(checked_arr[i]).next().next().find('li:first-child').find('.text').val());
            sum += Number($(checked_arr[i]).next().next().find('li:first-child').find('.ssum').text());
        }
        $('#number').text(num);
        $('#total').text(sum);
    }







    /* js版本 */
    /* 全选 */
    // 获取allSelector singleSelector的元素[多选框]
/*     let allSelector = document.querySelectorAll('.allSelector');
    let checkbox_arr = document.querySelectorAll('.singleSelector,.allSelector');
    // 循环绑定点击事件
    for(let i = 0;i<allSelector.length;i++){
        allSelector[i].addEventListener('click',function(){
            // 获取当前全选框的状态
            let status = this.checked;
            for(let j = 0;j<checkbox_arr.length;j++){
                // 循环给商品的复选框的checked 设置当前点击事件的 checked 状态
                checkbox_arr[j].checked = status;
            }
        })
    } */

    /*需求：购物车商品数量达标时 ，全选框选中，否则就不选中 */
    //获取商品的 singleSelector 复选框
/*     let singleSelector = document.querySelectorAll('.singleSelector');
    for(let i = 0;i<singleSelector.length;i++){
        // 循环绑定商品复选框的 singleSelector 点击事件
        singleSelector[i].addEventListener('click',function(){
            // 获取拥有checked的复选框
            let num = document.querySelectorAll('.singleSelector:checked').length;
            // 获取singleSelector 的长度
            let length = singleSelector.length;
            // 当singleSelector 的checkbox全部选中后,全选的复选框 也被选中
            if(num == length){
                for(let j = 0;j<allSelector.length;j++){
                    allSelector[j].checked = true;
                }
            }
            // 否则 全选的复选框 bu被选中
            else{
                for(let j = 0;j<allSelector.length;j++){
                    allSelector[j].checked = false;
                }
            }
        })
    } */


})