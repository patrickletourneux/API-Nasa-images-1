import { cpSync } from 'fs';
import * as React from 'react';
import { Dispatch , SetStateAction} from 'react';
import {getHomeSrc} from '../../axiosInstance';
import DayImg from '../DayImg';

const Home: React.FunctionComponent = () => {
    const [isLoading, setIsLoading]:[boolean, Dispatch<SetStateAction<boolean>>] = React.useState(true)
    const [imgHome, setImgHome]:[string, Dispatch<SetStateAction<string>>] = React.useState('')
    const [imgDaySrc, setImgDaySrc]:[string, Dispatch<SetStateAction<string>>] = React.useState('')

    const loadData = async () => {
        setIsLoading(true);
        getHomeSrc(setImgHome);
        setIsLoading(false);
    }

    const handleChangeDateInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setImgDaySrc(e.target.value);
    }

    React.useEffect(()=>{
        console.log('Home nouveau rendu',isLoading? 'loading' :'not loading');
        loadData(); 
    })

    return (<div > Home 
        {isLoading ? 
            <div>'########## loading'</div> 
            : 
            <img src={imgHome} alt={imgHome}></img>
        }
        <DayImg 
            onChange = {handleChangeDateInput}
        />
        </div>);
};

export default Home;