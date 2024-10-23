
import { Link } from 'react-router-dom';
import { IoAddCircleOutline } from "react-icons/io5";
import Table from './Table';
import useGetTasks from '../hooks/useGetTasks';
import { useEffect, useState } from 'react';

const Home = () => {
    let [task, setTask]=useState([])
    let taskData=useGetTasks(task)
    
    
    useEffect(()=>{
        setTask(taskData)
    },[taskData])
    
    const removeTaskFromState = (taskKey) => {
        setTask((prevTasks) => prevTasks.filter(task => task._id !== taskKey));
    };
    
      return(

<section className="container px-4 mx-auto">
    
        <div className='w-full flex justify-center mt-4'>
            <Link to={'add'}><IoAddCircleOutline className='size-16' /></Link>
        </div>
        <div className='w-full flex justify-center items-center'><h2 className="text-lg font-medium text-gray-800 dark:text-white  mx-auto ">Add to list</h2></div>
   

    <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                  
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
    <thead className="bg-gray-50 dark:bg-gray-800">
        <tr>
            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <span>Count</span> 
            </th>

            <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                Task to do
            </th>

            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                Priority
            </th>
            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                Deadline
            </th>

            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Status</th>

            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Completed</th>

            <th scope="col" className="relative py-3.5 px-4">
                <span className="sr-only">Edit</span>
            </th>
        </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">

   
                        {task.map((tas,index)=>(
                            <tr>
                            <Table key={tas._id} index={index+1} work={tas.task} date={tas.deadline} status={tas.status} priority={tas.priority} item={tas._id} removeTaskFromState={removeTaskFromState}/>
                            </tr>
                        )) }
                    


    </tbody>
    </table>
   
        
  
    






                    

                </div>
            </div>
        </div>
    </div>

  
</section>

      )
    };
    
export default Home