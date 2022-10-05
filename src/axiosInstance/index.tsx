import axios from 'axios';
import type {InitialDayData} from '../components/Day'

type SetFunction = (data : InitialDayData)=>void;

const api = axios.create({
  baseURL: `https://api.nasa.gov/planetary/`,
});

const base = `apod?api_key=${process.env.REACT_APP_NASA}&&hd=true`

export const getDayData = async (setFunction: SetFunction, dateString ? : string) => {
  let url = base;
  
  if (dateString){
    url = url + '&&date='+dateString;  
  }
  try {
    api.get(url)
        .then(function (response) {
          console.log(response.data);
          setFunction(response.data);
        });
  } catch (error) {
    console.log('error ',error)
    
  }
}
