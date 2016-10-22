/**
 * Created by liushuang on 16/10/19.
 */
var express = require('express');
var app = express();
var admin = express(); // the sub app
var secret = express();

app.get('/', function(req, res){
    res.send('hello world');
});

admin.get('/', function (req, res) {
    console.log(admin.mountpath); // /admin
    res.send('Admin Homepage');
})

//app.use('/admin', admin)

secret.get('/', function (req, res) {
    console.log(secret.mountpath); // /secr*t
    res.send('Admin Secret');
});

admin.use('/secr*t', secret); // load the 'secret' router on '/secr*t', on the 'admin' sub app
app.use(['/adm*n', '/manager'], admin); // load the 'admin' router on '/adm*n' and '/manager', on the parent app
app.listen(3000);


