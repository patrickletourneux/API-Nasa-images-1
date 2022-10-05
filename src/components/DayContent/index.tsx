import React from 'react'
import CardImage from '../CardImage';

type Props = {
    dayData : {
        url : string,
        date: string,
        media_type:string
        title:string
    }
}

const DayContent = (props: Props) => {
    
    console.log('Day Content',props.dayData.media_type)

    if (props.dayData.media_type === 'image'){
        return (
            <div>
            <CardImage
                    src={props.dayData.url} 
                    alt={props.dayData.url}
                    date={props.dayData.date}
                    />
           </div>
        )
    }else {
        return (
            <div>
                <iframe 
                    title={props.dayData.title}
                    width="420" 
                    height="315"
                    allowFullScreen={true}
                    src={props.dayData.url}>
                </iframe>
           </div>
        )
    }
}

export default DayContent;