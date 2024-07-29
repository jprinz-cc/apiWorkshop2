"use strict";
const modelAPI = require('../model/data');

const getPosts = async function (req, res, next) {
    console.log("**GET Posts Data");
    const posts = await modelAPI.getData();
    res.json(posts);    
};

const createPost = async function(req, res, next){
    console.log("**POST Create Post**");
    try {
        const post = { title: req.body.title, body: req.body.body };
        const response = await modelAPI.postData(post);
        console.log("**POST Create Post SUCCESS**");
        res.json(response);
      } catch (error) {
        console.log("**POST Create FAILED**");
        res.status(500).json({ error: 'Internal server error' });
      }
};


module.exports = {
    getPosts,
    createPost
}