import './index.css';

type Props = {
  dayData:{
    url:string;
    date:string
    hdurl:string
    title:string
    media_type:string
  }
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