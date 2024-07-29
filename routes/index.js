"use strict";

const express = require('express');
const router = express.Router();
const ctrlSite = require('../controllers/index');

/* GET home page. */
router.get('/', ctrlSite.getHomePage);


module.exports = router;