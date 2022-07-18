const axios = require("axios").default;

async function callAPi({ method, url, params }) {
  const { data } = await axios({
    method,
    url,
    params,
    headers: {
      Authorization: process.env.API_KEY,
    },
  });

  return data;
}

exports.handler = async (event) => {
  let result;
  switch (event.http_method) {
    case "GET":
      result = await callAPi({
        method: "GET",
        url: "https://api.pexels.com/v1/curated",
        params: {
          per_page: 80,
        },
      });
      break;
    case "POST":
      result = await callAPi({
        method: "GET",
        url: "https://api.pexels.com/v1/search",
        params: {
          query: event.body.query,
        },
      });
      break;
  }

  const finalCuratedPhotos = result.photos.map((photo) => {
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
