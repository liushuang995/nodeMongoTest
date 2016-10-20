/**
 * Created by liushuang on 16/10/20.
 */
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var db = mongoose.createConnection('mongodb://localhost:27017/mydb');
var MovieSchema=new mongoose.Schema({
    name:{type:String,default:"username"},
    age:{type:Number},
    sex:{type:String}
});

var person = db.model("user",MovieSchema);
var people=function(){};
//people.prototype.init = function(db,callback){
//    this.person = db.model("user",MovieSchema);
//    callback()
//}

/*******
 保存
 ********/
people.prototype.save=function(obj,callback){
    var instance=new person(obj);
    instance.save(function(err){
        callback(err);
    })
}
/**
 按照名称精确查询
 **/
people.prototype.findByName=function(name,callback){
    person.findOne({name:name},function(err,obj){
        callback(err,obj);
    });
}
people.prototype.close=function(){
    db.close()
}

module.exports=new people();
