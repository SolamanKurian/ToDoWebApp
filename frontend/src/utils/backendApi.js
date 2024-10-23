
 
const backendDomain= process.env.REACT_APP_BACKEND_URL;

const backendApi={
    addTask:{
        url:backendDomain+`/api/addtask`
    },
    getTask:{
        url:backendDomain+`/api/gettask`
    },
    updateStatus:{
        url:backendDomain+`/api/updatestatus`
    },
    loadEditTask:{
        url:backendDomain+`/api/loadedittask`
    },
    editTask:{
        url:backendDomain+`/api/edittask`
    },
    removeTask:{
        url:backendDomain+`/api/removetask`
    }
}

export default backendApi