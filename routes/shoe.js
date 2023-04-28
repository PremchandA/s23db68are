
var express = require('express');
// A little function to check if we have an authorized user and continue on

// redirect to login.
const secured = (req, res, next) => {
 if (req.user){
 return next();
 }
 req.session.returnTo = req.originalUrl;
 res.redirect("/login");
 }
const Shoe_controllers= require('../controllers/shoe');
var router = express.Router();
/* GET costumes */
router.get('/', Shoe_controllers.shoe_view_all_Page );

router.get('/detail', Shoe_controllers.shoe_view_one_Page);
/* GET create costume page */
router.get('/create',secured, Shoe_controllers.shoe_create_Page);
/* GET create update page */
\
router.get('/delete',secured, Shoe_controllers.shoe_delete_Page);
module.exports = router;

/* GET update costume page */
router.get('/update', secured,
 Shoe_controllers.shoe_update_Page);

