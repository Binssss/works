
var adverTop;
var adverLeft;
var adverObject;
var closeTop;
var closeLeft;
var closeObject;
function inix(){
		adverObject = document.getElementById("adver");
		closeObject = document.getElementById("close");
		if(adverObject.currentStyle){
			
				adverTop = parseInt(adverObject.currentStyle.top);
				adverLeft = parseInt(adverObject.currentStyle.left);
				
				closeTop = parseInt(closeObject.currentStyle.top);
				closeLeft = parseInt(closeObject.currentStyle.left);
			}
			else{
				adverTop = parseInt(document.defaultView.getComputedStyle(adverObject,null).top);
				adverLeft = parseInt(document.defaultView.getComputedStyle(adverObject,null).left);	
				
				closeTop = parseInt(document.defaultView.getComputedStyle(closeObject,null).top);
				closeLeft = parseInt(document.defaultView.getComputedStyle(closeObject,null).left);
			}
	}
	
function move(){
		var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		var scrollLeft = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
		adverObject.style.top = adverTop + parseInt(scrollTop) + "px";
		adverObject.style.left = adverLeft + parseInt(scrollLeft) + "px";
		
		closeObject.style.top = closeTop + parseInt(scrollTop) + "px";
		closeObject.style.left = closeLeft + parseInt(scrollLeft) + "px";
	}
	
function closeAd(){
	document.getElementById("close").style.display="none";	
	document.getElementById("adver").style.display="none";	

}

	
	window.onscroll = move;
	
	



	var nowFrame = 1;
	var maxFrame = 5;

function show(d1){
	if(Number(d1)){
		clearTimeout(theTimer);
		nowFrame = d1;
	}

	for(var i=1;i<(maxFrame+1);i++){
		if(i==nowFrame){
			$("#center_pic img").attr("src","images/dd_scroll_"+i+".jpg");
			$("#n"+i).addClass("num");
		}else{
			$("#n"+i).removeClass("num");
		}
	}

	if(nowFrame==maxFrame){
		nowFrame = 1;
	}else{
		nowFrame++;
	}
}

var theTimer = setInterval('show()',3000);
window.onload = show;

$(function(){

	$("#myd").click(function(){
		if($("#mydang").is(":visible")){
			$("#mydang").hide();
			return false;
		}else{
			$("#mydang").show();
			return false;
		}
		
	
		
	});
	
	inix();

	var scoll = 5;
	
		var t = setInterval(function scrollfont(){	
						
						if(scoll>=300){
							scoll -=300;
						
							}else{
						$(".book_class").scrollTop(scoll);
						scoll+=5;		
						}	
			},100);
	});	


