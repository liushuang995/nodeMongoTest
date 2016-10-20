/**
 * Created by liushuang on 16/10/20.
 */
var people = require('./test/people');
//people.save({name:'李学文',age:'26',sex:'女'},function(err,obj){
//    if(err){
//        console.log(err)
//    }else {
//        console.log('saved');
            people.findByName('李学文', function (err, obj) {
                if(err){
                    console.log(err)
                }else {
                    console.log(obj)
                }
                people.close()
            })


    //}
//})
