const express = require('express')
const taskController= require('../controllers/taskController')


const router = express.Router()


router.route('/').get(taskController.getAllTasks).post(taskController.createTasks)
router.route('/:id').get(taskController.getOneTask).patch(taskController.updateTask)
.delete(taskController.deleteTask).put(taskController.editTask)


module.exports = router;