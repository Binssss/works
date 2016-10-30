// JavaScript Document
$(function(){
	$("table.datalist tr:first").addClass("tableHeader");
	$("table.datalist tr:even:not(:first)").addClass("evenStyle");
	$("table.datalist tr:not(:first)").mouseover(function(){
			$(this).addClass("over");
		}).mouseout(function(){
				$(this).removeClass("over");
			});
	});