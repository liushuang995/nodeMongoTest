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

//mongoose.connect('mongodb://127.0.0.1:27017');
//var PersonSchema = new mongoose.Schema({
//    name:String ,  //定义一个属性name，类型为String
//    like:String
//});
//var PersonModel = db.model('Person',PersonSchema);
//var personEntity = new PersonModel({name:'liushaung995'});
//console.log(personEntity.name)
//personEntity.save();
//PersonModel.find(function(err,persons){
//    //查询到的所有person
//    console.info(persons)
//});
//var Cat = mongoose.model('Catsss', { name: String,id:String,age:Number });
//PersonSchema.add({age:Number})
//var Cat = mongoose.model('Catsss', PersonSchema);
//var del  = {name:"liushuang123456"};
////删除数据
////Cat.remove(del,function(err,result){
////    if(err){
////        console.log(err);
////    }else{
////        console.log("update");
////    }
////});
//// 原数据字段值
//var oldValue  = {age:20};
//// 单条件更新
//var newData1 = {$set:{name:"内容"}};
//// 多条件更新
//var newData2 = {$set:{name:"内容",age:2}};
//Cat.update(oldValue,newData2,function(err,result){
//    if(err){
//        console.log(err);
//    }else{
//        console.log("update");
//    }
//});

//插入数据
// 连接数据库
//var db = mongoose.createConnection('mongodb://127.0.0.1:27017/mydb');
// 设置数据类型
var monSchema = new mongoose.Schema({
    name:{type:String,default:"username"},
    age:{type:Number},
    sex:{type:String}
});
//// 选择集合
//var monModel = db.model('user',monSchema);
//// 数据集
//var content = {name:"Nick",age:23,sex:'男'};
////// 实例化对象并插入数据
//var monInsert = new monModel(content);
//monInsert.save(function(err){
//    if(err){
//        console.log(err);
//    }else{
//        console.log('成功插入数据');
//    }
//    db.close();
//});

//查询
 //选择集合
var monModel = db.model('user',monSchema);
var content = {name:"Nick"};
var field = {name:1,age:1,sex:1};
monModel.find(content,field,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
    db.close();
});


