var port = process.env.PORT || 8080;
var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(process.env.PWD + '/dist')).listen(port);