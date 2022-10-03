
import * as React from 'react';
import HomeImg from '../HomeImg';
import DayImg from '../DayImg';

const Home: React.FunctionComponent = () => {

    React.useEffect(()=>{
        console.log('Homenouveau rendu')
    })

    return (<main > 
            <HomeImg></HomeImg>
            <DayImg></DayImg>
        </main>);
};

export default Home;