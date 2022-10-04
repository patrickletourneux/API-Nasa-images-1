
import * as React from 'react';
import { Dispatch , SetStateAction} from 'react';
import {getImgSrc} from '../../axiosInstance';
import DayImgDateForm from '../DayImgDateForm';
import CardImage from '../CardImage'
import DayChangeButton from '../DayChangeButton'
import { addDaysToDateString } from '../../utils/dateFunctions';
import './index.css';

const DayImg: React.FunctionComponent = () => {
    const [isDayLoading, setIsDayLoading]:[boolean, Dispatch<SetStateAction<boolean>>] = React.useState(true)
    const [imgDayDate, setImgDayDate]:[string, Dispatch<SetStateAction<string>>] = React.useState('2022-08-06')
    const [imgDaySrc, setImgDaySrc]:[string, Dispatch<SetStateAction<string>>] = React.useState('')

    const loadDayImgData =  async () => {
        console.log('load',imgDayDate)
        await getImgSrc(setImgDaySrc,imgDayDate);     
    }
    
    const handleChangeDateInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setImgDayDate(e.target.value);
    }
    
    const handleButtonPlusOneDay = (e: React.MouseEvent<HTMLButtonElement>)=>{
        console.log('--------------')
        e.preventDefault();
        const dateStringPlusOneDay = addDaysToDateString(imgDayDate,1)
        setImgDayDate(dateStringPlusOneDay);
        console.log('dateStringPlusOneDay:', dateStringPlusOneDay)
        loadDayImgData();
        console.log('--------------')

    }
    const handleButtonMinusOneDay = (e: React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        const dateStringPlusOneDay = addDaysToDateString(imgDayDate,-1)
        setImgDayDate(dateStringPlusOneDay);
        loadDayImgData();
    }

    React.useEffect(()=>{
        console.log('DayImg nouveau rendu imgDayDate', imgDayDate)
        loadDayImgData(); 
    },[imgDayDate]);

    React.useEffect(()=>{
        loadDayImgData(); 
        setIsDayLoading(false);
        console.log('DayImg Premier  rendu')
    },[]);


    return (<div > 
        <DayImgDateForm 
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
            <CardImage
                src={imgDaySrc} 
                alt={imgDaySrc}
                date={imgDayDate}
            />
        }
        </div>);
};

export default DayImg;