function time(){
	var myDate = new Date("2017/08/08");
	var myDate2 = new Date();

	var time = myDate.getTime();
	var time2 = myDate2.getTime();

	var a = (time - time2)/1000;
	var hours =parseInt(a/3600);
	var mins = parseInt((a%3600)/60);
	var secs = parseInt(a%60);

	function add(n){
		if(n<=9){
			return "0" + n
		}else{
			return n
		}
	}
	hour.innerHTML = add(hours);
	min.innerHTML = add(mins);
	sec.innerHTML = add(secs);	
}
