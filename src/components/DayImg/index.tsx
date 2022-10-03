import React from 'react';
import './index.css';

type Props = {
    onChange:React.ChangeEventHandler<HTMLInputElement>
}

const DayImg = (props: Props) => {
  return (
    <div className='dayImg'>choose the image date
        <input 
          type='date'
          onChange = {props.onChange}
        >
        </input>

    </div>
  )
}

export default DayImg