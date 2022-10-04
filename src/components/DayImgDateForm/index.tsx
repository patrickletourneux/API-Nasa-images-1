import React from 'react';
import './index.css';

type Props = {
    onChange:React.ChangeEventHandler<HTMLInputElement>
}

const DayImgDateForm = (props: Props) => {
  return (
    <div className='dayImg-form'>choose date
        <form>
          <input 
            type='date'
            onChange = {props.onChange}
            >
          </input>
        </form>

    </div>
  )
}

export default DayImgDateForm