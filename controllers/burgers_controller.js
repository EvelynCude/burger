var express = require("express");
var router = express.Router();
// Import the model to use its database functions.
var burger = require("../models/burger.js");

// router.get("/", function(req, res){
//     res.redirect("/burgers");
// });

router.get("/", function (req, res) {
    burger.all(function (data) {
        res.render("index", {burger_list: data});
    });
});

router.post("/burgers/create", function (req, res) {
    burger.create(req.body.burger_name, function (result) {
            // Send back the ID of the new quote
            res.redirect("/");
        });
});

router.put("/burgers/update", function (req, res) {
    burger.update(req.body.burger_id, function (result) {
            res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;
