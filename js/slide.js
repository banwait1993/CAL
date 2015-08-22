var timer;
var slides = 5;
var timeLen = 15000;

function nextSlide(){
	clearTimeout(timer);
	var current = parseInt($("#counter").html());
	
	if(current < slides){
		var nextSlide = current + 1;
	}
	else{
		var nextSlide = 1;
	}
	
	//set rear image to next slide (still not visible)
	$("#slide_back img").attr("src","slide" + nextSlide + ".jpg");

	//hide front image
	$("#slide_front").stop(true,true);
	$("#slide_front").animate({opacity:"0"}, 700, "linear", function(){
		//change the front image source(currently hidden)
		$("#slide_front img").attr("src","slide" + nextSlide + ".jpg");
		//display front image
		$("#slide_front").css("opacity","1");
		//change jumpers
		$("#jumpers li.current").removeAttr("class");
		$("#jumpers #" + nextSlide).attr("class","current");
		//update counter
		$("#counter").html(nextSlide);
		//set timer for next image
		timer = setTimeout("nextSlide()", timeLen);
	});
}

function prevSlide(){
	clearTimeout(timer);
	var current = parseInt($("#counter").html());
	
	if(current == 1){
		var nextSlide = slides;
	}
	else{
		var nextSlide = current - 1;
	}
	
	//set rear image to next slide (still not visible)
	$("#slide_back img").attr("src","slide" + nextSlide + ".jpg");

	//hide front image
	$("#slide_front").stop(true,true);
	$("#slide_front").animate({opacity:"0"}, 700, "linear", function(){
		//change the front image source(currently hidden)
		$("#slide_front img").attr("src","slide" + nextSlide + ".jpg");
		//display front image
		$("#slide_front").css("opacity","1");
		//change jumpers
		$("#jumpers li.current").removeAttr("class");
		$("#jumpers #" + nextSlide).attr("class","current");
		//update counter
		$("#counter").html(nextSlide);
		//set timer for next image
		timer = setTimeout("nextSlide()", timeLen);
	});
}

function jump(slide){
	clearTimeout(timer);
	//set rear image to next slide (still not visible)
	$("#slide_back img").attr("src","slide" + slide + ".jpg");

	
	//hide front image
	$("#slide_front").stop(true,true);
	$("#slide_front").animate({opacity:"0"}, 700, "linear", function(){
		//change the front image source(currently hidden)
		$("#slide_front img").attr("src","slide" + slide + ".jpg");
		//display front image
		$("#slide_front").css("opacity","1");
		//change jumpers
		$("#jumpers li.current").removeAttr("class");
		$("#jumpers #" + slide).attr("class","current");
		//update counter
		$("#counter").html(slide);
		//set timer for next image
		timer = setTimeout("nextSlide()", timeLen);
		});
}

function ready(){
	$("#loading").css("display","none");
	$("#slider_wrapper").css("display","block");
	timer = setTimeout("nextSlide()", timeLen);
}
$(document).ready(function(){
	setTimeout("ready()",1000);
});

