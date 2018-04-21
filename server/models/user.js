var mongoose = require('mongoose');

//User
//email - require -trim - type - minlength
var User = mongoose.model('User',{
  email:{
    type:String,
    required:true,
    trim:true,
    minlength:1
  },
  name:{
    type:String,
    required:true
  }
});

module.exports = {User};
