var syslogParser = require('../lib/glossy/parse.js');

var message = "<34>1 2003-10-11T22:14:15.003Z mymachine.example.com su - ID47 - BOM'su root' failed for lonvick on /dev/pts/8";

for(var i = 0; i<10000; i++) {
    syslogParser.parse(message);
}

