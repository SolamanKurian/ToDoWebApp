let mongoose=require("mongoose")

let taskSchema=mongoose.Schema({
    task:String,
    deadline:Date,
    priority:String,
    status:{
        type:String,
        default:"Active"
    }
},
{
    timestamp:true
})

let taskModel=mongoose.model("task",taskSchema)

module.exports=taskModel