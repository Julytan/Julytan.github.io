function js1(){
	var inp1 = document.getElementById("inp1").value;
	var pwd = document.getElementById("pwd").value;

	var pattern = /^\w{5,14}$/ ;
	var pattern2 = /^[A-Za-z0-9]\w{8,20}/;
	var res = pattern.test(inp1);
	var res2 = pattern2.test(pwd);
	if(res){
		if(res2){
			alert("登录")
		}else{
			alert("密码格式输入有误")
		}
	}else{
		alert("账号格式输入有误")
	}

}