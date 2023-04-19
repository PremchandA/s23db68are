
var express = require('express');
const Shoe_controllers= require('../controllers/shoe');
var router = express.Router();
/* GET costumes */
router.get('/', Shoe_controllers.shoe_view_all_Page );

router.get('/detail', Shoe_controllers.shoe_view_one_Page);
/* GET create costume page */
router.get('/create', Shoe_controllers.shoe_create_Page);
/* GET create update page */
router.get('/update', Shoe_controllers.shoe_update_Page);
/* GET delete costume page */
router.get('/delete', Shoe_controllers.shoe_delete_Page);
module.exports = router;
