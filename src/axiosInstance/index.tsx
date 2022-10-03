import axios from 'axios';

const base = `apod?api_key=${process.env.REACT_APP_NASA}`

const api = axios.create({
    baseURL: `https://api.nasa.gov/planetary/`,
});

export const getHomeSrc = async (setFunctions: (srcImg:string)=>void) => {
  try {
    api.get(base)
        .then(function (response) {
          // console.log(response.data);
          setFunctions(response.data.url)     
        });
  } catch (error) {
    console.log(error)
    
  }
}
export const getDayImgSrc = async (setFunctions: (srcImg:string)=>void,dateString : string) => {
  try {
    api.get(base+'&&date='+dateString)
        .then(function (response) {
          // console.log(response.data);
          setFunctions(response.data.url)     
        });
  } catch (error) {
    console.log(error)
    
  }
}


export default api;