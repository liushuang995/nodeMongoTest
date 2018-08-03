/**
 * Created by liushuang on 16/10/20.
 */
var mongoose = require('./test/connect.js');
var collectionName = 'actor';
var schema = new mongoose.Schema({
    name:{type:String,default:"username"},
    age:{type:Number},
    sex:{type:String}
}, { collection: collectionName });

schema.set('collection', collectionName);

var Actors;
var db = {};
Actors = mongoose.model('Actor', schema, collectionName);
db.save = function(name,age,sex){
    var content = {name:name||"Shuang Liu",age:age||23,sex:sex||'男'};
    var ActorsInsert = new Actors(content);
    ActorsInsert.save(function(err){
        if(err){
            console.log(err);
        }else{
            console.info('saved');
        }
    })
}
db.find = function(name,callback){
    var content = {name:name};
    var field = {name:1,age:1,sex:1};
    Actors.find(content,field,function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log(1,result);
            callback(result)
        }
    });
}

db.update = function(oldValue,newData2){
    //var oldValue  = {age:20};
    // 单条件更新
    var newData1 = {$set:{name:"内容"}};
    // 多条件更新
    var newData2 = newData2||{$set:{name:"内容",age:2}};
    Actors.update(oldValue,newData2,function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log("update");
        }
    });
}

db.remove = function(content){
    Actors.remove(content, function(error){
        if(error) {
            console.log(error);
        } else {
            console.log('delete ok!');
        }
    })
}

module.exports = db;

//save('李学文',26,'人妖');
//find('李学文')
//update({_id:'5808816b442c792293428896'},{$set:{name:'李学文',age:2,sex:"男"}});