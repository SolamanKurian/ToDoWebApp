const express= require("express")
const cors=require("cors")
const router= require("./routes/router")
require ("dotenv").config()
const connectDB=require('./config/db')
const corsOptions={
    origin : process.env.FRONTEND_URL,
    credentials:true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}

const app=express()
app.use(express.json())

app.use(cors(corsOptions))
app.use("/api",router)


const PORT= process.env.PORT || 8080

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
        
})  
}).catch(()=>{
    console.error("Failed to connect to the database", err);
})