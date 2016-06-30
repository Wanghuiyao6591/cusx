$('.zhuce1').on('click',function(){
	$.ajax({
        url: 'zhuce.php',
        type: "POST",
       	data: {
            "xuehao": $("#zcxuehao").val(),
            "name": $("#zcname").val(),
            "xibie": $("#zcxi").val(),
            "class": $("#zcban").val(),
            "password": $("#zcpass").val(),
        	  },
        	dataType: 'text',
       		success: function () {
            	alert("注册成功！");
        	},
    });
})
