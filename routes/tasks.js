const router = require('express').Router();
const { getTasks, addTasks } = require('../controllers/TaskControllers');

router.route('/').get( getTasks );

router.route('/addTask').post( addTasks );


module.exports = router;