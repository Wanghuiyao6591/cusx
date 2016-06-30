$('.send').on('click', function () {
    if (($('#name').val() == '')||($('#xi').val()=='')
        ||($('#ban').val()=='')||($('#mail').val()=='')
        ||($('#tel').val()=='')||($('#zhuti').val()=='')
        ||($('#neirong').val()=='')) {
            alert("请输入所有内容以后提交！");
        }else{
            $.ajax({
            url: 'ldxx.php',
            type: "POST",
            data: {
                "PERSONNAME": $("#name").val(),
                "PERSONXIBIE": $("#xi").val(),
                "PERSONCLASS": $("#ban").val(),
                "PERSONE_MAIL": $("#mail").val(),
                "PERSONPHONE": $("#tel").val(),
                "MAINSEND": $("#zhuti").val(),
                "MAIN": $("#neirong").val(),
            },
            dataType: 'text',
            // timeout: 900,
            success: function () {
                alert("发送成功！");
                document.location="ldxx.html";
                },
            error: function () {
                alert("发送失败！");
                }

            });
        }
});