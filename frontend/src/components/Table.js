import React, { useState } from 'react'
import { FaRegCircle } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import axios from "axios"
import backendApi from '../utils/backendApi';
import { SlOptionsVertical } from "react-icons/sl";
import { Link } from 'react-router-dom';

const Table = ({index,work,date,status,priority,item,removeTaskFromState}) => {

    let [updatedStatus, setUpdatedStatus]=useState(status)
    let [dropdownVisible, setDropdownVisible]=useState(false)


    const markCompleted=async(key)=>{
    
        
       axios.post(backendApi.updateStatus.url,{key:key}).then((response)=>{
        console.log(response.data.task);
        setUpdatedStatus(response.data.task.status)
        
       }).catch(()=>{

       }).finally(()=>{

       })
        
    }
    let togledropdown=()=>{
        setDropdownVisible(!dropdownVisible);
    }

   
    const priorityStyles = {
        low: {
            textColor: 'text-emerald-500',
            bgColor: 'bg-emerald-100/60',
        },
        Medium: {
            textColor: 'text-yellow-500',
            bgColor: 'bg-yellow-100/60',
        },
        high: {
            textColor: 'text-red-500',
            bgColor: 'bg-red-100/60',
        },
    };
    const priorityClass = priorityStyles[priority];

    let removetAsk=async(key)=>{
        try {
            axios.get(backendApi.removeTask.url,{params:{key}}).then((response)=>{
                
                removeTaskFromState(key);    
            }).catch(()=>{

            })
        } catch (error) {
            
        }
        
    }


  return (
   <>
       
            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                <div>
                    <h2 className="font-medium text-gray-800 dark:text-white ">{index}</h2>
                </div>
            </td>
            <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                <div>
                <h2 className="text-gray-700 dark:text-gray-200">{work}</h2>
                </div>

            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
           { priorityClass ? (
        <div className={`inline px-3 py-1 text-sm font-normal rounded-full ${priorityClass.textColor} gap-x-2 ${priorityClass.bgColor} dark:bg-gray-800`}>
            {priority}
        </div>
    ) : null}
                
            
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
            <div>
                <h2 className="text-gray-700 dark:text-gray-200">{new Date(date).toLocaleDateString()}</h2>
                </div>
            </td>

            <td className="px-4 py-4 text-sm whitespace-nowrap">
            <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                    {updatedStatus}
                </div>
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
            <div className="">{
                updatedStatus==="Active"?<button onClick={()=>{markCompleted(item)}} className='text-3xl'><FaRegCircle /></button>:<button onClick={()=>{markCompleted(item)}} className='text-3xl'> <FaRegCircleCheck  /></button> 
                }
                    
                </div>
            </td>

            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <button onClick={togledropdown} className="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                <SlOptionsVertical />
                </button>
                {dropdownVisible && (
                     <div onMouseLeave={togledropdown} className="absolute right-0 z-10 w-32 py-2 mt-2 bg-white border rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
                    
                     <Link to="/edittask" state={{key:item}} className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-600">
                     Edit </Link>
                     <button onClick={()=>{removetAsk(item)}} className="block w-full px-4 py-2 text-left text-red-600 hover:bg-red-200 dark:text-red-400 dark:hover:bg-red-600">
                         Remove
                     </button>
                 </div>
                )}
            </td>
        
        </>
       
       



  )
}

export default Table