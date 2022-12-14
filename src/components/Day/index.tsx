
import * as React from 'react';
import { Dispatch , SetStateAction} from 'react';
import {getDayData} from '../../axiosInstance';
import { addDaysToDateString } from '../../utils/dateFunctions';
import type { DayData , ErrorResponseData} from '../../typescript/type';

import DayForm from '../DayForm';
import DayChangeButton from '../DayChangeButton';
import DayContent from '../DayContent';

import './index.css';

const initialDayData :DayData = {
    title:"StargateMilkyWay",
    date : "2022-08-17",
    hdurl :"https://apod.nasa.gov/apod/image/2208/StargateMilkyWay_Oudoux_1800.jpg",
    media_type :"image",
    url:"https://apod.nasa.gov/apod/image/2208/StargateMilkyWay_Oudoux_960.jpg",
}
const initialDayError :ErrorResponseData = {
    code : '',
    msg : '',
    servide_version :'',
}


const Day: React.FunctionComponent = () => {
    const [isDayLoading, setIsDayLoading]:[boolean, Dispatch<SetStateAction<boolean>>] = React.useState(true);
    const [imgDayDate, setImgDayDate]:[string, Dispatch<SetStateAction<string>>] = React.useState('2022-08-17');
    const [dayData, setDayData]:[DayData, Dispatch<SetStateAction<DayData>>] = React.useState(initialDayData);
    const [dayError, setDayError]:[ErrorResponseData, Dispatch<SetStateAction<ErrorResponseData>>] = React.useState(initialDayError);

    const loadDayImgData =  async () => {
        setIsDayLoading(true);
        await getDayData(setDayData,setDayError,imgDayDate);     
    }
    
    const handleChangeDateInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setImgDayDate(e.target.value);
    }
    
    const handleButtonPlusOneDay = (e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        const dateStringPlusOneDay = addDaysToDateString(imgDayDate,1)
        setImgDayDate(dateStringPlusOneDay);
    }
    const handleButtonMinusOneDay = (e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        const dateStringPlusOneDay = addDaysToDateString(imgDayDate,-1)
        setImgDayDate(dateStringPlusOneDay);
    }

    React.useEffect(()=>{
        setIsDayLoading(false)
    },[dayError]);

    React.useEffect(()=>{
        setDayError(initialDayError);
    },[dayData]);

    React.useEffect(()=>{
        loadDayImgData(); 
        setIsDayLoading(false);
    },[imgDayDate]);

    return (<div > 
        <DayForm 
            onChange = {handleChangeDateInput}
        />
        <div className='dayInformation'>
            <DayChangeButton
                sign=' < '
                onClick ={handleButtonMinusOneDay}
                />
                {imgDayDate}
            <DayChangeButton
                sign=' > '
                onClick ={handleButtonPlusOneDay}
            />
        </div>
        {isDayLoading ? 
            <div>#######loading</div> 
            : 
            <div>
            <DayContent
                errorResponseData = {dayError}
                dayData = {dayData}
            ></DayContent>
            </div>
        }
        </div>);
};

export default Day;