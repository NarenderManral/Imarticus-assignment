const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  _id: {
    type:String,
    required:true
  },
  username:{
    type:String,
    required:true
  },
  Name:{
    type:String
  },
  photoUrl:{
    type:String
  },
  passwordEncrypted:{
    type:String
  },
  email:{
    type:String
  },
  phoneNumber:{
      type:String
  },
  coursesEnrolled:[
    {
        courseId:{
            type:String
        },
        title:{
            type:String
        },
        percentComplete:{
            type:Number
        }
    }
  ],
  groupEnrolled:[
    {
      groupId:{
        type:String
      },
      groupTitle:{
        type:String
      }
    }
  ]
});

module.exports = mongoose.model('User',userSchema);