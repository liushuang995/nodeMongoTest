/**
 * Created by liushuang on 16/10/21.
 */
var express = require('express');
var path = require('path')
var app = express();
var port = 30000;
app.set('views', './views')
app.set('view engine', 'ejs');
app.use(express.static('static'))
app.get('/', function(req, res){
    res.render('index', { title: '测试代码' });
});
app.listen(port);
console.log('Http Server running at http://localhost:' + port + '/');