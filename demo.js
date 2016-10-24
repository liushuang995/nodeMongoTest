/**
 * Created by liushuang on 16/10/21.
 */
var express = require('express');
var path = require('path');
var logger = require('morgan');
var mongoose = require('mongoose');
var sass = require('node-sass-middleware');
var db = require('./test');
var app = express();
var port = 30000;
var DB_URL = 'mongodb://localhost:27017/mydb';
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.use(logger('dev'));

app.use(sass({
    src: path.join(__dirname, 'static/scss'),
    dest: path.join(__dirname, 'static'),
    debug: true,
    outputStyle: 'compressed',
    prefix:  '/prefix'
}));
app.use(express.static(path.join(__dirname, 'static')));
//app.use(express.static('dest'))
app.get('/', function(req, res) {
    mongoose.connect(DB_URL);
    db.find('李学文',function(data){
        res.render('index', {
            title: data[0].age
        });
    })
    mongoose.connection.close()
    //console.log(db.find)
    //res.render(_reqUrl, { title: _reqUrl });
});

app.listen(port);
//console.log('Http Server running at http://localhost:' + port + '/');