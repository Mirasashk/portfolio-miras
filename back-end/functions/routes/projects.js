var express = require('express');
var router = express.Router();
var { db, bucket } = require('../utils/Firebase');
const { getProjectsThumbnail } = require('../controllers/projectsController');

/* GET home page. */
router.get('/', function (req, res) {
  db.ref('projects').once('value', (snapshot) => {
    const projects = snapshot.val();
    console.log(projects);

    res.send(projects);
  });
});

router.get('/thumbnails', getProjectsThumbnail);

module.exports = router;
