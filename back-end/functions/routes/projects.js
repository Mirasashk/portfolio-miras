var express = require('express');
var router = express.Router();
var { db, bucket } = require('../utils/Firebase');

/* GET home page. */
router.get('/', function (req, res) {
  db.ref('projects').once('value', (snapshot) => {
    const projects = snapshot.val();

    res.send(projects);
  });
});

router.get('/thumbnails', function (req, res) {
  db.ref('projects').once('value', (snapshot) => {
    const projects = snapshot.val();

    const projectsThumbnail = projects.map((project) => {
      return {
        title: project.title,
        description: project.description,
        thumbnailImage: project.thumbnailImage,
        image: project.image,
        link: project.link,
      };
    });

    res.send(projectsThumbnail);
  });
});

module.exports = router;
