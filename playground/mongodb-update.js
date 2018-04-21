//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id:new ObjectID('5adb02dcb1302bd7817e707b')
  // },{
  //   //update operator
  //   $set:{
  //     completed:true
  //   }
  // },{
  //   returnOriginal:false
  // }).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id:new ObjectID('5adaeac6b1eac232505ce628')
  },{
    //update operator
    $set:{
      location:'China Shenzhen'
    }, $inc: {
      age: 1
    }
  },{
    returnOriginal:false
  }).then((result)=>{
    console.log(result);
  });

  // db.close();
});
