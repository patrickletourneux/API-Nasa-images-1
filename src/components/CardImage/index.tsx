import './index.css';

type Props = {
  dayData : {
      url : string,
      hdurl :string
      date : string,
      media_type : string
      title : string
  }
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