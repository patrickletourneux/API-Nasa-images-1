import './index.css';

type Props = {
    src:string;
    alt:string;
    date?:string
}

const CardImage = (props: Props) => {

  const filename = props.src.replace(/^.*[\\/]/, '')

  return (
    <div className="CardImage">
        <a 
          className="download-link"
          href={props.src}
          download>
          <button>
            download image {props.date}
            <br/>
            {filename}
          </button>
        </a>
        <img
         src={props.src}
         alt={props.alt}
         >
         </img>
    </div>
  )
}

export default CardImage;