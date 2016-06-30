$('#tijiao').on('click', function () {
    if ($('#xinxiang').val() == '') {
        alert("请输入内容以后重新提交！");
    }
    
    $.ajax({
        url: 'liuyan.php',
        type: "POST",
        data: {
            "textarea": $("#xinxiang").val(),
        },
        dataType: 'text',
        // timeout: 900,
        success: function () {
            alert("留言成功！");
            document.location="index.html";
        },
        error: function () {
            alert("留言失败！");
        }
    });
});

