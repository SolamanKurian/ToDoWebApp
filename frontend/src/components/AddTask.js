import React, { useRef, useState } from 'react'
import { validateForm } from '../utils/validate'
import axios from "axios";
import backendApi from '../utils/backendApi';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
const AddTask = () => {
  let [errorMessage, setErrorMessage]=useState(null)
let task=useRef(null)
let date=useRef(null)
let priority=useRef(null)
let navigate=useNavigate();
const handleFormSubmit=()=>{
  let Message=validateForm(date.current.value)
  setErrorMessage(Message)
  if(Message) return;
  try {
    let data={
      date:date.current.value,
      task:task.current.value,
      priority:priority.current.value
    }

    axios.post(backendApi.addTask.url,data).then((response)=>{
      toast.success(response?.data?.message)
      navigate("/")
    }).catch((response)=>{

    })
    
  } catch (error) {
    
  }
}

  return (
    <div className='mt-4'>
      <section className="w-1/2 p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 gap-8">
        <div className='flex justify-center'>
        <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white m-6 align-middle">Add the Task to do</h2>
        </div>
   

    <form onSubmit={(e)=>e.preventDefault()}>
        <div className="  ">
            <div className=' items-center gap-6  '>
                <label className="text-gray-700 dark:text-gray-200" for="task">Task</label>
                <input ref={task} id="task" type="text" className="block w-full px-4 py-1 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div className='flex gap-6 mt-8 justify-center items-center'>
                <label className="text-gray-700 dark:text-gray-200" for="priority">Priority</label>
                <select ref={priority} id='priority'className='block w-full px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600'>
                  <option value={"high"}>High</option>
                  <option value={"Medium"}>Medium</option>
                  <option value={"low"}>Low</option>
                </select>
            </div>


            <div className='justify-center items-center gap-6 mt-8 '>
                <label className="text-gray-700 dark:text-gray-200" for="date">Deadline</label>
                <span className='text-red-600 mx-5'>{errorMessage}</span>
                <input ref={date} id="date" type="date" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 focus:ring-opacity-50 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:border-blue-500"></input>
            </div>

            
        </div>

        <div className="flex justify-end mt-6">
            <button onClick={handleFormSubmit} type='submit' className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
    </form>
</section>

    </div>
  )
}

export default AddTask