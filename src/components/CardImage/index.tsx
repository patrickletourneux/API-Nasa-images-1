

import React from 'react';
import './index.css';

import type { DayData } from '../../typescript/type';

type Props = {
    dayData: DayData
}

class CardImage extends React.Component<Props>{
  // constructor(props : Props){
  //   super(props);
  // }
  render(){
    return (
      <div className="CardImage">
          <a 
            className="download-link"
            href={this.props.dayData.hdurl}
            download>
            <button>
              download image
            </button>
          </a>
          <img
          src={this.props.dayData.url}
          alt={this.props.dayData.title}
          >
          </img>
      </div>
    )
  }
}


export default CardImage;