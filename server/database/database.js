// var mysql  = require('mysql');  //调用MySQL模块
// var pool = mysql.createPool({
// 	host: '192.168.10.9',
// 	user: 'dblp',
// 	password: "pkuvisdblp",
// 	port: '3306',
// 	database: 'dblp',
// 	// host: '10.10.12.2',       //主机
// 	// user: 'root',               //MySQL认证用户名
// 	// password: '123456',        //MySQL认证用户密码
// 	// port: '3306',                   //端口号
// 	// database: 'gasdb',                   //数据库
// });
var logger;

function initialize(v_logger){
	logger = v_logger;
	return this;
}

// function handleString(v_string){
// 	var t_string = v_string;
// 	while(t_string.indexOf("%20")>=0){
// 		t_string = t_string.replace("%20", " ");
// 	}
// 	return t_string;
// }

//执行SQL语句
function queryRecord(v_record, callback){
	// pool.getConnection(function(err, connection) {
	// 	if(connection){
	// 		// Use the connection;
	// 		connection.query(
	// 			// "select * from author where name=\'"+handleString(v_record)+"\'",
	// 			"select * from "+handleString(v_record),
	// 		 	function(err, rows) {
	// 			// And done with the connection.
	// 			connection.release();
	// 			if (err) {
	// 				logger.log("    Handler: Error: " + err);
	// 				callback(null);
	// 				return;
	// 			}
	// 			callback(rows);
	// 		});
	// 	}else{
	// 		logger.log("    Handler: No available connection!");
	// 		return;
	// 	}
	// });
}

module.exports = {
	initialize: initialize,
	query: queryRecord,
};