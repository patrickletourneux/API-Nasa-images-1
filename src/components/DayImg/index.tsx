
import * as React from 'react';
import { Dispatch , SetStateAction} from 'react';
import {getImgSrc} from '../../axiosInstance';
import DayImgDateForm from '../DayImgDateForm';
import CardImage from '../CardImage'

const DayImg: React.FunctionComponent = () => {
    const [isDayLoading, setIsDayLoading]:[boolean, Dispatch<SetStateAction<boolean>>] = React.useState(true)
    const [imgDayDate, setImgDayDate]:[string, Dispatch<SetStateAction<string>>] = React.useState('2022-09-06')
    const [imgDaySrc, setImgDaySrc]:[string, Dispatch<SetStateAction<string>>] = React.useState('')

    const loadDayImgData = async () => {
        setIsDayLoading(true);
        getImgSrc(setImgDaySrc,imgDayDate);
        setIsDayLoading(false);
    }

    const handleChangeDateInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setImgDayDate(e.target.value);
    }

    const handleSubmitDate = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        loadDayImgData(); 
    }

    React.useEffect(()=>{
        console.log('DayImg nouveau rendu')
    });
    React.useEffect(()=>{
        loadDayImgData(); 
        setIsDayLoading(false);
    },[]);


    return (<div > 
        <DayImgDateForm 
            onChange = {handleChangeDateInput}
            onSubmit = {handleSubmitDate}
        />
        {isDayLoading ? 
            <div>choose a date before today</div> 
            : 
            <CardImage
                src={imgDaySrc} 
                alt={imgDaySrc}
            />
        }
        </div>);
};

export default DayImg;