import React from 'react'

type Props = {
    src:string;
    alt:string;
}

const CardImage = (props: Props) => {
  return (
    <div>
        <img
         src={props.src}
         alt={props.alt}
         >
         </img>

    </div>
  )
}

export default CardImage;