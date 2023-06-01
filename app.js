const express = require('express')
const taskRouter = require('./routers/taskRouter')
const dotenv = require('dotenv').config()
const connectDB = require('./midelware/connectdb')
const errorhandler = require('./midelware/errorhandler')

const app = express()
app.use(express.json())


app.use('/api/v1/tasks',taskRouter)

app.use(errorhandler)
connectDB()

const port =process.env.PORT || 3000
//if you need run code second App write in terminal PORT= 6000 
app.listen(port,()=>{
    console.log(`Server is runnig in port ${port}`)
})
