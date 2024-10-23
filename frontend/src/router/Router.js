import { createBrowserRouter } from "react-router-dom";
import AddTask from "../components/AddTask";
import Layout from "../layout/Layout";
import Home from "../components/Home";
import EditTask from "../components/EditTask";

const router=createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {
                path:'',
                element:<Home/>
            },
            {
                path:'add',
                element:<AddTask/>
            },{
                path:'edittask',
                element:<EditTask/>
            }
        ]
    }
])

export default router