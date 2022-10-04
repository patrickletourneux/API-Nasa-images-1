import axios from 'axios';

type SetFunction = (url:string)=>void;

const api = axios.create({
  baseURL: `https://api.nasa.gov/planetary/`,
});

const base = `apod?api_key=${process.env.REACT_APP_NASA}&&hd=true`

export const getImgSrc = async (setFunctions: SetFunction,dateString ? : string) => {
  let url = base;
  
  if (dateString){
    url = url + '&&date='+dateString;  
  }
  try {
    api.get(url)
        .then(function (response) {
          console.log(response.data);
          console.log(response.data.media_type)
          if (response.data.media_type ==='image'){
            setFunctions(response.data.url)     
            // setFunctions(response.data.hdurl)     
          }
        });
  } catch (error) {
    console.log('error ',error)
    
  }
}
