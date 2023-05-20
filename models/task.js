var mongoose = require("mongoose");


var taskSchema = mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'done'],
    default: 'pending'
  },
  creator_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }   
},
{ timestamps: true }
);


module.exports = mongoose.model("Task", taskSchema);