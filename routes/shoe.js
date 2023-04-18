
var express = require('express');
const Shoe_controllers= require('../controllers/shoe');
var router = express.Router();
/* GET costumes */
router.get('/', Shoe_controllers.shoe_view_all_Page );

router.get('/detail', Shoe_controllers.shoe_view_one_Page);
/* GET create costume page */
router.get('/create', Shoe_controlers.shoe_create_Page);
module.exports = router;
