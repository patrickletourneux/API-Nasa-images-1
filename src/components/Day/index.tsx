
import * as React from 'react';
import { Dispatch , SetStateAction} from 'react';
import {getDayData} from '../../axiosInstance';
import DayForm from '../DayForm';
import CardImage from '../CardImage';
import DayChangeButton from '../DayChangeButton';
import { addDaysToDateString } from '../../utils/dateFunctions';
import './index.css';
import DayContent from '../DayContent';

export type InitialDayData = typeof initialDayData;

const initialDayData = {
    title:"StargateMilkyWay",
    date : "2022-08-17",
    hdurl :"https://apod.nasa.gov/apod/image/2208/StargateMilkyWay_Oudoux_1800.jpg",
    media_type :"image",
    url:"https://apod.nasa.gov/apod/image/2208/StargateMilkyWay_Oudoux_960.jpg",
}

const Day: React.FunctionComponent = () => {
    const [isDayLoading, setIsDayLoading]:[boolean, Dispatch<SetStateAction<boolean>>] = React.useState(true);
    const [imgDayDate, setImgDayDate]:[string, Dispatch<SetStateAction<string>>] = React.useState('2022-08-17');
    // const [imgDaySrc, setImgDaySrc]:[string, Dispatch<SetStateAction<string>>] = React.useState('');
    const [dayData, setDayData]:[InitialDayData, Dispatch<SetStateAction<InitialDayData>>] = React.useState(initialDayData);

    const loadDayImgData =  async () => {
        setIsDayLoading(true);
        await getDayData(setDayData,imgDayDate);     
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
        loadDayImgData(); 
        setIsDayLoading(false);
    },[imgDayDate]);


    React.useEffect(()=>{
        console.log('Day rendu')
        loadDayImgData(); 
        setIsDayLoading(false);
    },[]);


    return (<div > 
        <DayForm 
            onChange = {handleChangeDateInput}
        />
        <div className='dayInformation'>
            {imgDayDate}
            <DayChangeButton
                sign=' - '
                onClick ={handleButtonMinusOneDay}
            />
            <DayChangeButton
                sign=' + '
                onClick ={handleButtonPlusOneDay}
            />
        </div>
        {isDayLoading ? 
            <div>#######loading</div> 
            : 
            <div>
            {/* <CardImage
                src={imgDaySrc} 
                alt={imgDaySrc}
                date={imgDayDate}
            /> */}
            <DayContent
                dayData = {dayData}
            ></DayContent>
            </div>
        }
        </div>);
};

export default Day;