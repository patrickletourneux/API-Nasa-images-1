import React, { Component } from 'react'
import CardImage from '../CardImage';
import CardVideo from '../CardVideo';

import type { DayData ,ErrorResponseData} from '../../typescript/type';

type Props = {
    dayData: DayData
    errorResponseData : ErrorResponseData
}

type State = {}

class DayContent extends Component<Props, State> {
  state = {}

  render() {
    if (this.props.errorResponseData.code !== ''){
        return(
            <div className='errorMessage'>
                {this.props.errorResponseData.msg}
            </div>
        )
    }
    
    if (this.props.dayData.media_type === 'image'){
        return (
            <div>
                <CardImage
                    dayData = {this.props.dayData}
                />
           </div>
        )
    }else {
        return (
            <div>
                <CardVideo
                    dayData = {this.props.dayData}
                />
           </div>
        )
    }
  }
}

export default DayContent

