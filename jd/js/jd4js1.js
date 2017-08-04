function js1(){
	var tp = document.getElementById("tp");
	tp.style.display = 'none';
}

window.onscroll = function(){
	var a = document.documentElement.scrollTop || document.body.scrollTop;
	var jsall = document.getElementById("jsall");
	var aside2 = document.getElementById("aside2");
	console.log(a)
	if(a>=1000){
		jsall.style.position = "fixed";
		jsall.style.top = 0 + "px";
		jsall.style.left = 0 + "px";
		aside2.style.display = "block";
	}else{
		jsall.style.position = "static";
		aside2.style.display = "none";
	}
}