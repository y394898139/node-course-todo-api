const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
var id = '5adbec72cc1c0dd40460c9a311';

if(!ObjectID.isValid(id)){
  console.log('ID not valid');
}

Todo.find({
  _id : id
}).then((todos)=>{
  console.log('Todos',todos);
});

Todo.findOne({
  _id : id
}).then((todo)=>{
  console.log('Todo',todo);
});

Todo.findById(id).then((todo)=>{
  if(!todo){
    return console.log('Id not found');
  }
  console.log('Todo By Id',todo);
}).catch((err) => console.log(err));

var userId = '5adbbcfaee0cb4a42c012e78';
User.findById(userId).then((user)=>{
  if(!user){
    return console.log('User not found');
  }
  console.log(JSON.stringify(user,undefined,2));
},(e)=>{
  console.log(e);
});
