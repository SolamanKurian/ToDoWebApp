
import axios from "axios"
import backendApi from "../utils/backendApi"
import { useEffect, useState } from "react"
let useGetTasks=()=>{
    let [taskData, setTaskData]=useState([])
useEffect(()=>{
    let getTask=async()=>{
        try {
            axios.get(backendApi.getTask.url).then((response)=>{
                let data=response.data.tasks
                setTaskData(data)
                
            }).catch(()=>{

            }).finally(()=>{

            })
            
        } catch (error) {
            
        }
    }
    getTask();
    
},[])
return taskData; 
}
export default useGetTasks;