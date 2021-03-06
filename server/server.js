const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');

var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
//Post /todos
app.post('/todos',(req,res)=>{
  var todo = new Todo({
    text:req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });
});

//Get /todos
app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(err)=>{
    res.status(400).send(err);
  });
});

//GET /todos/id
app.get('/todos/:id',(req,res)=>{
  var id = req.params.id;

  //Valid id using isValid
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findById(id)
  .then((todo) => {
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((err) => {
    res.status(400).send();
  });
});

//Delete /todos/id
app.delete('/todos/:id',(req,res)=>{
  var id = req.params.id;

  //Validate the id
  if(!ObjectID.isValid(id)){
    return res.status(400).send();
  }

  Todo.findByIdAndRemove(id)
    .then((todo)=>{
      if(!todo){
        return res.status(404).send();
      }
      return res.send({todo});
    }).catch((err) => {
      res.status(400).send();
    });
});

//Update /todos/id
app.patch('/todos/:id',(req,res)=>{
  var id = req.params.id;
  var body = _.pick(req.body,['text','completed']);

  if(!ObjectID.isValid(id)){
    return res.status(400).send();
  }

  if(_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime();
  }else{
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});

app.listen(port,()=>{
  console.log(`Start on port ${port}`);
});

module.exports = {app};
