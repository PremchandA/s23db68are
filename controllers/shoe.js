var Shoe = require('../models/shoe');
// List of all Costumes
exports.shoe_list = function(req, res) {
res.send('NOT IMPLEMENTED: shoe list');
};
// for a specific Costume.
exports.shoe_detail = function(req, res) {
res.send('NOT IMPLEMENTED: shoe detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.shoe_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: shoe create POST');
};
// Handle Costume delete form on DELETE.
exports.shoe_delete = function(req, res) {
res.send('NOT IMPLEMENTED: shoe delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.shoe_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: shoe update PUT' + req.params.id);
};
// List of all shoes
exports.shoe_list = async function(req, res) {
    try{
    theShoe = await Shoe.find();
    res.send(theShoe);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };

    // VIEWS
// Handle a show all view
exports.shoe_view_all_Page = async function(req, res) {
try{
theShoe = await Shoe.find();
res.render('Shoe', { title: 'Shoe Search Results', results: theShoe });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};








    
