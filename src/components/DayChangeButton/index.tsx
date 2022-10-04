import * as React from 'react';

interface IDayChangeButtonProps {
    sign:string,
    onClick : (e: React.MouseEvent<HTMLButtonElement>)=>void
}

export default function DayChangeButton (props: IDayChangeButtonProps) {
  return (
    <div>
      <button
      onClick={props.onClick}
      >
        {props.sign}
      </button>
    </div>
  );
}
