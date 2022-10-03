import React from 'react'
import { Dispatch , SetStateAction} from 'react';
import {getHomeSrc} from '../../axiosInstance';
import CardImage from '../CardImage'


const HomeImg: React.FunctionComponent = () => {
    const [isHomeLoading, setIsHomeLoading]:[boolean, Dispatch<SetStateAction<boolean>>] = React.useState(true)
    const [imgHome, setImgHome]:[string, Dispatch<SetStateAction<string>>] = React.useState('')

    const loadHomeData = async () => {
        setIsHomeLoading(true);
        getHomeSrc(setImgHome);
        setIsHomeLoading(false);
    }
    
    React.useEffect(()=>{
        console.log('HomeImg nouveau rendu')
        loadHomeData();
    },[])

    return (<div > HomeImg
        {isHomeLoading ? 
            <div>'########## loading'</div> 
            : 
            <CardImage
                src={imgHome} 
                alt={imgHome}
            />
            
        }
        </div>);
};

export default HomeImg