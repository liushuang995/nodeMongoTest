/**
 * Created by liushuang on 16/10/20.
 */
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost:27017/mydb');
var schema = new mongoose.Schema({
    name:{type:String,default:"username"},
    age:{type:Number},
    sex:{type:String}
}, { collection: 'actor' });

// or

schema.set('collection', 'actor');

// or

var collectionName = 'actor'
var Actors = mongoose.model('Actor', schema, collectionName);

var save = function(name,age,sex){
    var content = {name:name||"Shuang Liu",age:age||23,sex:sex||'男'};
    var ActorsInsert = new Actors(content);
    ActorsInsert.save(function(err){
        if(err){
            console.log(err);
        }else{
            console.info('saved');
        }
        close();
    })
}
var find = function(name){
    var content = {name:name};
    var field = {name:1,age:1,sex:1};
    Actors.find(content,field,function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log(result);
        }
        close();
    });
}

var update = function(oldValue,newData2){
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
        close();
    });
}

var remove = function(){

}

var close = function (){
    mongoose.connection.close(function(){
        console.log('closed')
    })
}
//save('李学文',26,'人妖');
find('李学文')
//update({_id:'5808816b442c792293428896'},{$set:{name:'李学文',age:2,sex:"男"}});