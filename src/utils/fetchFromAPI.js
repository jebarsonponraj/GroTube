import axios from 'axios';

export const fetchFromAPI = async (page) => {
  try {
    const { data } = await axios.get(`https://internship-service.onrender.com/videos?page=${page}`);
    // console.log('Data fetched from API:', data);
    return data;
  } catch (error) {
    console.log('Error fetching videos:', error);
    return [];
  }
};
