
import React, { Component } from 'react'
import './index.css';

import type { DayData } from '../../typescript/type';

type Props = {
  dayData: DayData
}

type State = {}

class CardVideo extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div className="CardVideo">
        <iframe 
          title={this.props.dayData.title}
          width="300" 
          height="250"
          allowFullScreen={true}
          src={this.props.dayData.url}>
        </iframe>
      </div>
    )
  }
}

export default CardVideo

