import React from 'react'
import CardImage from '../CardImage';
import CardVideo from '../CardVideo';

import type { InitialDayData } from '../Day';

type Props = {
    dayData:InitialDayData
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