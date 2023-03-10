const router = require('express').Router();
const { getTasks, addTasks, updateTask, deleteTask } = require('../controllers/TaskControllers');

router.route('/').get( getTasks );

router.route('/addTask').post( addTasks );

router.route('/updateTask/:id').put( updateTask );

router.route('/deleteTask/:id').delete( deleteTask );


module.exports = router;