  window.onlaod = function(){
  	var timer = null;
  	clearInterval(timer);
  	timer = setInterval(function(){
  		var deg;
  		deg += 10;
  		$("#music_off").css({"transform","rotate("+deg+"deg)"});
  	},10)

  }

