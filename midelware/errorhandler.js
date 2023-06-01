const {CustomAPIError} = require('../Error/customError')


const errorhandler = (err,req,res,next)=>{
    if(err instanceof CustomAPIError){
        
        return res.status(err.statusCode).json({ message: err.message })

    }
      return res.status(500).json({msg:'Something went wrong , try again later'})
}


module.exports = errorhandler;