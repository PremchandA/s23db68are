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
//Handle Costume update form on PUT.
exports.shoe_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Shoe.findById( req.params.id)
// Do updates of properties
if(req.body.shoeName) toUpdate.shoeName = req.body.shoeName;
if(req.body.shoePrice) toUpdate.shoePrice = req.body.shoePrice;
if(req.body.shoemadein) toUpdate.shoemadein = req.body.shoemadein;
if(req.body.checkboxsale) toUpdate.sale = true;
else toUpdate.same = false;

let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
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

// Handle Costume create on POST.
exports.shoe_create_post = async function(req, res) {
console.log(req.body)
let document = new Shoe();
// We are looking for a body, since POST does not have query parameters.
// Even though bodies can be in many different formats, we will be picky
// and require that it be a json object
// {"costume_type":"goat", "cost":12, "size":"large"}
document.shoeName = req.body.shoeName;
document.shoePrice = req.body.shoePrice;
document.shoemadein = req.body.shoemadein;
try{
let result = await document.save();
res.send(result);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// for a specific shoe.
exports.shoe_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Shoe.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };

    // Handle Costume delete on DELETE.
exports.shoe_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Shoe.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };

    // Handle a show one view with id specified by query
exports.shoe_view_one_Page = async function(req, res) {
console.log("single view for id " + req.query.id)
try{
result = await Shoe.findById( req.query.id)
res.render('shoedetail',
{ title: 'shoe Detail', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.shoe_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('shoecreate', { title: 'shoe Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    
    
    









    
