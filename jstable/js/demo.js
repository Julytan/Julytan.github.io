Mock.mock('./info.php',{
	"tabnum|10-15":[
		{
			"id":"@guid",
			"name":"@cname",
			"age|1-100":1,
			"sex|1": ["男","女","保密"],
			"phone":'@string("number", 11)',
			"email":"@email(10)",
			"hobby|2-4":"@cword(1)",
			"data":'@datetime()'
		}
	]
})