const Task = require('../models/taskModel')
const asyncWrapper =require('../midelware/asyncweapper')
const {CustomAPIError} = require('../Error/customError')


exports.getAllTasks= asyncWrapper( async(req,res)=>{
    const tasks = await Task.find({})
   res.status(200).json({
    success:'Get All Tasks',
    data:{tasks, nbHits: tasks.length}
})
})

exports.createTasks= asyncWrapper (async (req,res)=>{
    const task = await Task.create(req.body)
    res.status(200).json({
        status:'Create New Task',
        task:task
    
    })
})

exports.getOneTask =asyncWrapper(async(req,res,next)=>{
    // this anther find single task by id
       const {id:taskID}= req.params
       // const task = await Task.findById(req.params.id )
       
       const task = await Task.findOne({_id:taskID} )

       if(!task){
       console.log('test')
        return next(new CustomAPIError(`No Task With id: ${taskID} `, 404))
    }

    res.status(200).json({
        status:'this your require',
        task:task
    })
    console.log('end')
})

exports.updateTask = asyncWrapper( async(req,res)=>{
   const {id:taskID} = req.params
    const task = await Task.findOneAndUpdate({ _id:taskID}, req.body,
        {runValidators:true, new:true})

        if(!task){
            // return res.status(404).json({msg:`No Task With id ${taskID} `})
            return next(new CustomAPIError (`No Task With id ${taskID} `,404))

        }


    res.status(200).json({
        status:'Update is Success',
         task:task
                        })
})


exports.deleteTask= asyncWrapper(async(req,res)=>{
    const {id:taskID}=req.params
    const task = await Task.findOneAndDelete({_id:taskID})
    if(!task){
        // return res.status(404).json({msg:`No Task With id ${taskID} `})
        return next(new CustomAPIError(`No Task With id ${taskID} `,404))

    }
    res.status(200).json({
        status:'Delete is Success',
         task:task
                        })
})

exports.editTask=  asyncWrapper( async(req,res)=>{
    const {id:taskID} = req.params
     const task = await Task.findOneAndUpdate({ _id:taskID}, req.body,
         {runValidators:true, new:true,overwrite:true})
 
         if(!task){
             // return res.status(404).json({msg:`No Task With id ${taskID} `})
             return next(new CustomAPIError(`No Task With id ${taskID} `,404))
            }
 
 
     res.status(200).json({
         status:'Task is Edit',
          task:task
                         })

 })
