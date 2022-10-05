import React from 'react'
import CardImage from '../CardImage';
import CardVideo from '../CardVideo';

type Props = {
    dayData:{
        url:string;
        date:string
        hdurl:string
        title:string
        media_type:string
      }
}

const DayContent = (props: Props) => {
    
    if (props.dayData.media_type === 'image'){
        return (
            <div>
                <CardImage
                    dayData = {props.dayData}
                />
           </div>
        )
    }else {
        return (
            <div>
                <CardVideo
                    dayData = {props.dayData}
                />
           </div>
        )
    }
}

export default DayContent;