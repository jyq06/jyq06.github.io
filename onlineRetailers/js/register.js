$(function(){
    let telRule = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    let unRule = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
    let pswRule = /^[a-zA-Z]\w{5,17}$/;
    // 获取除了checkbox 与submit之外的所有input  绑定表单失去焦点事件
    $('input:not(input:checkbox,input:submit)').blur(function(){
        let value = $(this).val();
        // 用户名格式验证
        if(this.id == 'userName'){
            vertificationCode($(this),unRule,value,'❌：请输入5-16之间，并以字母开头的账户');
        }
        // 密码验证
        else if(this.id == 'psw'){
            vertificationCode($(this),pswRule,value,'❌：请输入5-17位的密码')
        }
        // 两次密码验证
        else if(this.id == 'sPsw'){
            if(value == $('#psw').val()){
                $(this).closest('div').next().text('✔');
            }
            else{
                $(this).closest('div').next().text('❌：两次密码不正确');
            }
        }
        else if(this.id == 'tel'){
            vertificationCode($(this),telRule,value,'❌：请输入不以111 123开头的十一位的电话号码');
        }
        // 验证码
        else if(this.id == 'verCode'){
            if(value == '4E7R'){
                $(this).closest('div').next().text('✔');
            }
            else{
                $(this).closest('div').next().text('❌：验证码不正确');
            }
        }

    })

    function vertificationCode(t,Rule,v,prompt){
        // 判断是否符合规则，符合就i正确
        if(Rule.test(v)){
            t.closest('div').next().text('✔');
       }
        // 不符合就给出提示
       else{
            t.closest('div').next().text(prompt);
       }
    }
})  