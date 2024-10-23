const express=require('express')
let controller=require("../controllers/controller")
let router=express.Router();


router.post("/addtask",controller.addTask)
router.get("/gettask",controller.loadTask)
router.post("/updatestatus",controller.updateStatus)
router.get("/loadedittask",controller.loadEditTask)
router.post("/edittask",controller.editTask)
router.get("/removetask",controller.removeTask)

module.exports=router;