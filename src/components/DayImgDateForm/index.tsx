import React from 'react';
import './index.css';

type Props = {
    onChange:React.ChangeEventHandler<HTMLInputElement>
    onSubmit: React.FormEventHandler<HTMLFormElement>
}

const DayImgDateForm = (props: Props) => {
  return (
    <div className='dayImg-form'>choose the image date
        <form
        onSubmit={props.onSubmit}
        >
          <input 
            type='date'
            onChange = {props.onChange}
            >
          </input>
          <button 
            type='submit'
          >
            submit
          </button>
        </form>

    </div>
  )
}

export default DayImgDateForm