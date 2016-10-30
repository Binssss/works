// JavaScript Document
$(function(){
	$(".text").each(function(){
        var defaultVal = this.value;
		$(this).focus(function(){
				if(this.value==defaultVal){
						this.value = "";
					}
		});
		$(this).blur(function(){
				if(this.value==""){
						this.value= defaultVal;
					}
			});
    });
	
	$("input[type='button']").click(function(){
			var Name = $("input[type='text']").val();
			var content = $("textarea").val();
			if(Name!="你的昵称" && content!="你要说的话"){
					var msg = "<li><span>"+Name+"</span><p>"+content+"</p></li>";
					$('ul').append(msg);
					$("input[type='text']").val("你的昵称");
					$("textarea").val("你要说的话");
				}
		});
});