
import * as React from 'react';
import HomeImg from '../HomeImg';
import DayImg from '../DayImg';

const Home: React.FunctionComponent = () => {

    React.useEffect(()=>{
        console.log('Homenouveau rendu')
    })

    return (<div > Home 
            <HomeImg></HomeImg>
            <DayImg></DayImg>
        </div>);
};

export default Home;