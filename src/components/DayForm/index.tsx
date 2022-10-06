
import React, { Component } from 'react'
import './index.css';

type Props = {
  onChange:React.ChangeEventHandler<HTMLInputElement>
}

type State = {}

class DayForm extends Component<Props, State> {
  state = {}

  render() {
    return (
      <form className='day-form'>
        <input 
          className='date-input'
          type='date'
          onChange = {this.props.onChange}
          >
        </input >
      </form>
    )
  }
}

export default DayForm

