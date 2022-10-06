import axios from 'axios';

import type { DayData ,ErrorResponseData} from '../typescript/type';


type SetFunction = (data : DayData)=>void;
type SetErrorFunction = (errorData : ErrorResponseData)=>void;

const api = axios.create({
  baseURL: `https://api.nasa.gov/planetary/`,
});

const base = `apod?api_key=${process.env.REACT_APP_NASA}&&hd=true`

export const getDayData = async (setFunction: SetFunction, setErrorFunction: SetErrorFunction, dateString ? : string) => {
  let url = base;
  
  if (dateString){
    url = url + '&&date='+dateString;  
  }

  try{
    const response = await api.get(url)
    // console.log(response.data);
    setFunction(response.data);
  } catch (error : any) {
    // console.log('error.response.data', error.response.data)
    setErrorFunction(error.response.data)
  }

}
