$('.land').on('click', function () {
	if(($('.admin').val() == 'admin')&&($('.pass').val() == '123456')){
        	document.location="message.html";
     	}else{
     		alert("账号或密码错误！")
     	}

    
    $.ajax({
        url: 'message.php',
        type: "POST",
        data: {
            // "textarea": $("#xinxiang").val(),
            "admin":$(".admin").val(),
            "pass":$(".pass").val(),
        },
        // dataType: 'text',
        // timeout: 900,
    });
});