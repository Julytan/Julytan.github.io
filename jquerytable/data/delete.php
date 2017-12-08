<?php

include('./Medoo.php');

$config = [
	'database_type' => 'mysql',//数据库类型
    'database_name' => 'demo',//数据库名称
    'server' => '127.0.0.1',//数据库地址
    'username' => 'root',//用户名
    'password' => '123456',//密码
    'charset' => 'utf8',//字符集
    'port' => 3306,//端口号
];

$m = new Medoo\Medoo($config); //实例化，创建对象
$id = $_GET['id'];
$m->delete('table',['id[=]'=>$id ]);


?>