
const mongoose=require('mongoose')

const courseSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    createdDate:{
        type:Date,
        default:Date.now
    }

});

module.exports=mongoose.model("Course",courseSchema);