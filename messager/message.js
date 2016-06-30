$('#addLiu').load('query.php',function(){
	$('.li').on('click',function(){
		var num=$(this).prev().prev().prev().html();
		// console.log(num);
	    $.ajax({
	    	url:'delSql.php',
	    	type:"POST",
	    	data: {
            	"del": num,
        	},
	    });
	    $(this).parent().remove();  
	})
	$('#shenhe').on('click',function(){
		$('#shenhe').html('已审核');
	})
});



