"use strict";

const express = require('express');
const router = express.Router();
const ctrlSite = require('../controllers/index');
const ctrlAPI = require('../controllers/api');

/* GET home page. */
router.get('/', ctrlSite.getHomePage);

/* GET API posts */
router.get('/api/posts', ctrlAPI.getPosts);

/* POST API create post*/
router.post('/api/post', ctrlAPI.createPost);


module.exports = router;