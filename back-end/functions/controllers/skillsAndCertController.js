/**
 * Retrieves skills and certifications data from the database and
 * returns an array of objects containing
 * the title, description, and image URL.
 *
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {void}
 */
//
const { db, bucket } = require('../utils/Firebase');
const { getDownloadURL } = require('firebase-admin/storage');

const getDownloadUrl = async (fileRef) => {
  const downloadUrl = await getDownloadURL(fileRef);
  return downloadUrl;
};

const getSkillsAndCerts = (req, res) => {
  db.ref('skillsAndCerts').once('value', async (snapshot) => {
    const skillsAndCerts = snapshot.val();
    const skillsAndCertsThumbnails = await Promise.all(
      skillsAndCerts.map(async (skills) => {
        const fileRef = bucket.file(skills.image);
        const downloadUrl = await getDownloadUrl(fileRef);
        return {
          ...skills,
          image: downloadUrl,
        };
      })
    );

    res.json(skillsAndCertsThumbnails);
  });
};

module.exports = { getSkillsAndCerts };
