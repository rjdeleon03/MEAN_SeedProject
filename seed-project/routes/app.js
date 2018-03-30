var express = require('express');
var router = express.Router();
var User = require("../models/user");

router.get('/', function(req, res, next) {
    res.render("index");
});

router.get('/', function (req, res, next) {
    User.find({}, function(err, users) {
        if (err) {
            return res.send("Error getting users");
        }
        res.render('node', {users: users});
    });
});

router.post('/message', function(req, res, next) {
    var email = req.body.email;
    var user = new User({
        firstName: "Alice",
        lastName: "Wanderer",
        password: "secret",
        email: email,
    });
    user.save(); // Save to database
    res.redirect("/");
});

module.exports = router;
