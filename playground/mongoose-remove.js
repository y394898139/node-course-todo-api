const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}) => multiple delete
// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

//Todo.findOneAndRemove()

// Todo.findOneAndRemove({_id:'5adc06336ead752de8bddf1f'}).then((todo)=>{
//   console.log(todo);
// });

//Todo.findByIdAndRemove()

// Todo.findByIdAndRemove('5adc06336ead752de8bddf1f').then((todo)=>{
//   console.log(todo);
// });
