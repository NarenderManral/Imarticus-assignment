const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  _id: {
    type:String,
    required:true
  },
  heading:{
    type:String,
    required:true
  },
  code:{
    type:String
  },
  permission:{
    type:String
  },
  coursesId:{
    type:String
  },
  admins:[
    {
      userid:{
        type:String
      }
    }
  ],
  comments:[
    {
      author:{
        type:String
      },
    comment:{
        type:String
    }
    }
  ],
});

module.exports = mongoose.model('Group',groupSchema);