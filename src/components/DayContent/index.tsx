import React from 'react'
import CardImage from '../CardImage';
import CardVideo from '../CardVideo';

import type { DayData } from '../../typescript/type';

type Props = {
    dayData: DayData
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