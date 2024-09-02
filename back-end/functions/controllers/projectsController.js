const { db, bucket } = require('../utils/Firebase');
const { getDownloadURL } = require('firebase-admin/storage');

const getDownloadUrl = async (fileRef) => {
  const downloadUrl = await getDownloadURL(fileRef);
  return downloadUrl;
};

const getProjectsThumbnail = (req, res) => {
  db.ref('projects').once('value', async (snapshot) => {
    const projects = Object.values(snapshot.val());

    const projectsThumbnail = await Promise.all(
      projects.map(async (project) => {
        console.log(project.thumbnailImage);
        const fileRef = bucket.file(project.thumbnailImage);
        const downloadUrl = await getDownloadUrl(fileRef);

        const images = project.images.map(async (image) => {
          const fileRef = bucket.file(image);
          return await getDownloadUrl(fileRef);
        });

        return {
          ...project,
          thumbnailImage: downloadUrl,
          images: await Promise.all(images),
        };
      })
    );

    res.json(projectsThumbnail);
  });
};

module.exports = { getProjectsThumbnail };
