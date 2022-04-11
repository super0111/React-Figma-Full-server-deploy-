const router = require('express').Router();

const { 
    addVisitor, 
    getYearlyVisitors, 
    getMonthlyVisitors, 
    getDailyVisitors,
} = require('../controller/visitors');

router.get('/add', addVisitor);
router.get('/yearly', getYearlyVisitors);
router.get('/monthly', getMonthlyVisitors);
router.get('/daily', getDailyVisitors);


module.exports = router;
