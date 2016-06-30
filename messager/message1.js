$('#addXin').load('query1.php',function(){
	$('.li').on('click',function(){
		var num=$(this).prev().prev().prev().prev().prev().prev().html();
		// console.log(num);
	    $.ajax({
	    	url:'delSql1.php',
	    	type:"POST",
	    	data: {
            	"del": num,
        	},
	    });
	    $(this).parent().remove();
	})
});

