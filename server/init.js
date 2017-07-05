var app = require('./server.js')
var InitConfig = require('./initConfig.js')
var config = require('../config/server-config.js')



function start(){
	app.listen(config.port);

	app.on('error', function (e) {
        if (e.code === 'EADDRINUSE') {
            console.log("[ERROR]"['red'] + ": 端口 " + config.port + " 已经被占用, 请关闭占用该端口的程序或者使用其它端口.");
        }
        if (e.code === 'EACCES') {
            console.log("[ERROR]: 权限不足, 请使用sudo执行."['red']);
            process.send('exit');
        }
        return process.exit(1);
    });

    app.on('listening', function () {
        console.log('Starting on port：' + config.port);
    });
}

function startHostProxy() {
	InitConfig.readHostConf('.host_leedskit')
}

module.exports = {
	start : start,
	startHostProxy: startHostProxy
}