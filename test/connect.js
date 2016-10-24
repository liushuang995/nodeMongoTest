/**
 * Created by liushuang on 16/10/24.
 */
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

DB_URL = 'mongodb://localhost:27017/mydb';

/**
 * 连接
 */
//mongoose.connect(DB_URL);

/**
 * 连接成功
 */
mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + DB_URL);
});

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

module.exports = mongoose;