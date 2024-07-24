var express = require('express');
var router = express.Router();
var { db, bucket } = require('../utils/Firebase');

router.get('/thumbnails', function (req, res) {
  db.ref('skillsAndCerts').once('value', (snapshot) => {
    const skillsAndCerts = snapshot.val();
    console.log(skillsAndCerts);

    const skillsAndCertsThumbnails = skillsAndCerts.map((skills) => {
      return {
        title: skills.title,
        description: skills.description,
        image: skills.image,
      };
    });
    console.log(skillsAndCertsThumbnails);
    res.send(skillsAndCertsThumbnails);
  });
});

module.exports = router;
