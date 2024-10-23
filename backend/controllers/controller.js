const taskModel=require("../models/taskModel")


const addTask=async (req,res)=>{
    try {
        let taskData= new taskModel({
            task:req.body.task,
            deadline:req.body.date,
            priority:req.body.priority
        })
        let saveData=await taskData.save()
        if(saveData){
            res.status(201).json({
                data:saveData,
                success:true,
                error:false,
                message:"task added succesfully"
            })
        }
    } catch (error) {
        console.error("Error in task adding:", error);
    res.json({
      message: error.message,
      error: true,
      success: false,
    });
    }

}

const loadTask=async(req,res)=>{
    try {
        let tasks= await taskModel.find()
        res.status(200).json({tasks})
       
    } catch (error) {
        
    }
}
const updateStatus=async(req,res)=>{
    try {
        let task=await taskModel.findOne({_id:req.body.key})
        if(task){
            if(task.status==="Active"){
                task.status="Completed";
                await task.save();
            }else if(task.status="Completed"){
                task.status="Active";
                await task.save();
            }

            let updatedTask=await taskModel.findOne({_id:req.body.key})
            res.json({
                task:updatedTask
            })
        }else{
            throw new Error("task not found");
        }
        
        
        
    } catch (error) {
        res.status(400).json({
            message: error.message,
            error: true,
            success: false,
          });
    }
}
const loadEditTask=async(req,res)=>{
    
    try {
        let task=await taskModel.findOne({_id:req.query.key})

        if(task){
            res.json({
                task:task
            })
        }else{
            throw new Error("task not found");
        }
        
    } catch {
        res.status(400).json({
            message: error.message,
            error: true,
            success: false,
          });
    }
    
    
}
let editTask=async(req,res)=>{
    try {
        
        let id=req.body.id;

        let task =await taskModel.findOne({_id:id})
        task.task=req.body.task
        task.deadline=req.body.date
        task.priority=req.body.priority
        await task.save()

        let updatedTask=await taskModel.findOne({_id:id})
        if(updatedTask){
            res.json({
                task:updatedTask
            })
        }

    } catch (error) {
        res.status(400).json({
            message: error.message,
            error: true,
            success: false,
          });
    }
}

const removeTask=async(req,res)=>{
    try {

        let {key}=req.query
        let deletedTask= await taskModel.findByIdAndDelete({_id:key})
        if(deletedTask){
            res.json({
                task:deletedTask
            })
        }

    } catch (error) {
        
    }
}
module.exports={
    addTask,
    loadTask,
    updateStatus,
    loadEditTask,
    editTask,
    removeTask
}