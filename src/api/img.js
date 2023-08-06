const BASE_URL = 'https://pixabay.com/api/';
const apiKey = "37752238-a4c546d1d3d991ecad223b19f";
const PER_PAGE = 12;

async function fetchImages(query, currentPage) {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${query}&page=${currentPage}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.hits;
  } catch (error) {
    throw new Error('Error fetching images from the API');
  }
}

export { fetchImages };
