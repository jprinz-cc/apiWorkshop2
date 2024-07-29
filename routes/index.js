"use strict";

const express = require('express');
const router = express.Router();
const ctrlSite = require('../controllers/index');
const ctrlAPI = require('../controllers/api');

/* GET home page. */
router.get('/', ctrlSite.getHomePage);

/* GET API posts */
router.get('/api/posts', ctrlAPI.getPosts);


module.exports = router;