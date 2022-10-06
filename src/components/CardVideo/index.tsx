import './index.css';

import type { DayData } from '../../typescript/type';

type Props = {
    dayData: DayData
}

const CardVideo = (props: Props) => {

  // const filename = props.src.replace(/^.*[\\/]/, '')

  return (
    <div className="CardVideo">
      <iframe 
        title={props.dayData.title}
        width="300" 
        height="250"
        allowFullScreen={true}
        src={props.dayData.url}>
      </iframe>
    </div>
  )
}

export default CardVideo;