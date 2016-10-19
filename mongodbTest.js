/**
 * Created by liushuang on 16/10/19.
 */
//var mongodb = require('mongodb');
//
//var server = new mongodb.Server("127.0.0.1",27017,{});//本地27017端口
//
//new mongodb.Db('mydb',server,{}).open(function(error,client){//数据库：mongotest
//    if(error) throw error;
//    var collection = new mongodb.Collection(client,'user');//表：user
//    collection.find(function(error,cursor){
//        cursor.each(function(error,doc){
//            if(doc){
//                console.log("name:"+doc.name+" age:"+doc.age);
//            }
//        });
//    });
//});
var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017');
//var db = mongoose.createConnection('mongodb://127.0.0.1:27017');
//db.on('error',console.error.bind(console,'连接错误:'));
//db.once('open',function(){
//    console.info('__')
//});
var PersonSchema = new mongoose.Schema({
    name:String ,  //定义一个属性name，类型为String
    like:String
});
//var PersonModel = db.model('Person',PersonSchema);
//var personEntity = new PersonModel({name:'liushaung995'});
//console.log(personEntity.name)
//personEntity.save();
//PersonModel.find(function(err,persons){
//    //查询到的所有person
//    console.info(persons)
//});
//var Cat = mongoose.model('Catsss', { name: String,id:String,age:Number });
PersonSchema.add({age:Number})
var Cat = mongoose.model('Catsss', PersonSchema);
var del  = {name:"liushuang123456"};
//删除数据
//Cat.remove(del,function(err,result){
//    if(err){
//        console.log(err);
//    }else{
//        console.log("update");
//    }
//});
// 原数据字段值
var oldValue  = {age:20};
// 单条件更新
var newData1 = {$set:{name:"内容"}};
// 多条件更新
var newData2 = {$set:{name:"内容",age:2}};
Cat.update(oldValue,newData2,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log("update");
    }

});
//var kitty = new Cat({ name: 'liushuangww' });
//
//kitty.age = 20;
//kitty.save(function (err) {
//    if (err) {
//        console.log(err);
//    } else {
//        console.log('meow');
//    }
//});


