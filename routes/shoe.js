
var express = require('express');
const Shoe_controllers= require('../controllers/shoe');
var router = express.Router();
/* GET costumes */
router.get('/', Shoe_controllers.shoe_view_all_Page );
module.exports = router;
