const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coursesSchema = new Schema({
  _id: {
    type:String,
    required:true
  },
  title:{
    type:String,
    required:true
  },
  enrollments:{
    type:Number
  },
  noRatings:{
    type:String
  },
  premium:{
    type:Boolean,
    required:true
  },
  rating:{
    type:String
  },
  noSubSection:{
    type:Number,
    required:true
  },
  subSection:[
    {
      subHeading:{
        type:String
      },
      video:{
        videoUrl:{
          type:String
        },
        quiz:{
          type:Boolean
        },
        resources:{
            type:String
        },
        about:{
            type:String
        }
      }
    }
  ],
});

module.exports = mongoose.model('Courses',coursesSchema);