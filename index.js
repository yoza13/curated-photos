const axios = require("axios").default;

exports.handler = async (event) => {
  const { data: curatedPhotos } = await axios({
    method: "GET",
    url: "https://api.pexels.com/v1/curated",
    params: {
      per_page: 80,
    },
    headers: {
      Authorization: process.env.API_KEY,
    },
  });

  const finalCuratedPhotos = curatedPhotos.photos.map((photo) => {
    return {
      id: photo.id,
      url: photo.url,
      photographer: photo.photographer,
      src: photo.src.tiny,
      alt: photo.alt,
    };
  });

  return { photos: finalCuratedPhotos };
};
