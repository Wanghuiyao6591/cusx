$('.land').on('click',function(){
	var user=$('.admin').val();
	var psd=$('.pass').val();
	$.ajax({
        url: 'Dl.php',
        type: "POST",
       	data: {
            "zhanghao":user,
            "mima":psd,
        	  },
        	dataType: 'text',
       		success: function (data) {
       			if(data==1){
       				alert("登录成功！");
            		location.href='index.html';
       			}
       			if(data==2){
       				alert("账户名或密码不存在")
       			}
        	},
    });
})