function js2(){
	var inp1 = document.getElementById("inp1").value;
	var inp2 = document.getElementById("inp2").value;

	var pattern = /^[1]\d{10}$/ ;
	var pattern2 = /^\d{5}$/;
	var res = pattern.test(inp1);
	var res2 = pattern2.test(inp2);
	if(res){
		if(res2){
			alert("登录")
		}else{
			alert("输入有误")
		}
	}else{
		alert("请输入正确的手机号")
	}

}