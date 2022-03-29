const express = require("express");
const router = express.Router();

const dataController = require('./controllers/countsController');

router.post('/data/register', dataController.registerCount);
router.get('/data', dataController.getByDay);

module.exports = router;
