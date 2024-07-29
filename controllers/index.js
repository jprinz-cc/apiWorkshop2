"use strict";

const getHomePage = function(req, res, next) {
    res.render('index', { title: 'Express' });
};

module.exports = {
    getHomePage
}