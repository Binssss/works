
// JavaScript Document
 $(function (){
	$("div img").addClass("alpha");
	$("div img:eq(0)").removeClass("alpha");
	$("div img").mouseover(function(){
		var big_src = $(this).attr("src");
	$("#test").attr("src",big_src);
		$(this).removeClass("alpha").siblings().addClass("alpha");
		});	
	});