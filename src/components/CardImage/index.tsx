import './index.css';

import type { DayData } from '../../typescript/type';

type Props = {
    dayData: DayData
}


const CardImage = (props: Props) => {

  const filename = props.dayData.url.replace(/^.*[\\/]/, '')

  return (
    <div className="CardImage">
        <a 
          className="download-link"
          href={props.dayData.hdurl}
          download>
          <button>
            download image
          </button>
        </a>
        <img
         src={props.dayData.url}
         alt={props.dayData.title}
         >
         </img>
    </div>
  )
}

export default CardImage;