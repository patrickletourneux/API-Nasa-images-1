import axios from 'axios';

const api = axios.create({
    baseURL: `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_NASA}`,
});

export const getHomeSrc = async (setFunctions: (srcImg:string)=>void) => {
  try {
    api.get('')
        .then(function (response) {
          // console.log(response.data);
          setFunctions(response.data.url)     
        });
  } catch (error) {
    console.log(error)
    
  }
}


export default api;