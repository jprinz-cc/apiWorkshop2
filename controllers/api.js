"use strict";
const modelAPI = require('../model/data');

const getPosts = async function (req, res, next) {
    console.log("**GET Posts Data");
    const posts = await modelAPI.getData();
    res.json(posts);    
};


module.exports = {
    getPosts
}