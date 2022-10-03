import './index.css';

type Props = {
    src:string;
    alt:string;
}

const CardImage = (props: Props) => {
  return (
    <div className="CardImage">
        <a 
          className="download-link"
          href={props.src}
          download>
          <button>
            download image
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