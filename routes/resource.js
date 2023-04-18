var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var shoe_controller = require('../controllers/shoe');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);


/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/shoe', shoe_controller.shoe_create_post);
// DELETE request to delete Costume.
router.delete('/shoe/:id', shoe_controller.shoe_delete);
// PUT request to update Costume.
router.put('/shoe/:id', shoe_controller.shoe_update_put);
// GET request for one Costume.
router.get('/shoe/:id', shoe_controller.shoe_detail);
// GET request for list of all Costume items.
router.get('/shoe', shoe_controller.shoe_list);
// GET request for one costume.
router.get('/shoe/:id', shoe_controller.shoe_detail);
//* GET detail costume page 
module.exports = router;


