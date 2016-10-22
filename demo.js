/**
 * Created by liushuang on 16/10/21.
 */
var express = require('express');
var path = require('path');
var db = require('./test');
var app = express();
var port = 30000;
app.set('views', './views')
app.set('view engine', 'ejs');
app.use(express.static('dest'))
app.get('/', function(req, res) {
    db.find('李学文',function(data){
        res.send(data)
    })
    //console.log(db.find)
    //res.render(_reqUrl, { title: _reqUrl });
});
app.listen(port);
console.log('Http Server running at http://localhost:' + port + '/');