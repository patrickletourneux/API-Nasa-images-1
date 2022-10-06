import React, { Component } from 'react'

type Props = {
  sign:string,
  onClick : (e: React.MouseEvent<HTMLButtonElement>)=>void
}

type State = {}
class DayChangeButton extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>
        <button
        onClick={this.props.onClick}
        >
          {this.props.sign}
        </button>
      </div>
    );
  }
}

export default DayChangeButton;

