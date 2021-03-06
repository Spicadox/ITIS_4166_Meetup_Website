const express = require('express');

const router = express.Router();

// routes to the homepage
router.get(['/', '/index', '/index.ejs'], function (req, res) {
    res.render("index", { req: req });
});

// routes to the newConnection page
router.get(['/newConnection', '/newConnection.ejs'], function (req, res) {
    res.render("newConnection", { req: req })
});

// routes to the savedConnections page
router.get(['/savedConnections', '/savedConnections.ejs'], function (req, res) {
    res.render("savedConnections", { req: req })
});

// routes to the about page
router.get(['/about', '/about.ejs'], function (req, res) {
    res.render("about", { req: req })
});

// routes to the contact page
router.get(['/contact', '/contact.ejs'], function (req, res) {
    res.render("contact", { req: req })
});

// routes to unavailable pages
router.get('/*', function (req, res) {
    res.send('404 Error: Page Not Found')
});


module.exports = router