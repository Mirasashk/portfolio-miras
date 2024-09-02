/**
 * Express router for handling skills and certifications routes.
 * @module routes/skillsAndCerts
 */

var express = require('express');
var router = express.Router();
var { db, bucket } = require('../utils/Firebase');
const { getDownloadURL } = require('firebase-admin/storage');
const { getSkillsAndCerts } = require('../controllers/skillsAndCertController');

/**
 * Route for retrieving thumbnails of skills and certifications.
 * @name GET /thumbnails
 * @function
 * @memberof module:routes/skillsAndCerts
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Object} - JSON response containing the thumbnails
 */
router.get('/thumbnails', getSkillsAndCerts);

module.exports = router;
