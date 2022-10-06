import React from 'react'
import CardImage from '../CardImage';
import CardVideo from '../CardVideo';

import type { DayData ,ErrorResponseData} from '../../typescript/type';

type Props = {
    dayData: DayData
    errorResponseData : ErrorResponseData
}

const DayContent = (props: Props) => {

    if (props.errorResponseData.code !== ''){
        return(
            <div className='errorMessage'>
                {props.errorResponseData.msg}
            </div>
        )
    }
    
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