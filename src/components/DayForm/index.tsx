import React from 'react';
import './index.css';

type Props = {
    onChange:React.ChangeEventHandler<HTMLInputElement>
}

const DayForm = (props: Props) => {
  return (
        <form className='day-form'>
          <input 
            className='date-input'
            type='date'
            onChange = {props.onChange}
            >
          </input >
        </form>
  )
}

export default DayForm