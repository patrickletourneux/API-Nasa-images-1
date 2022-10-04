import * as React from 'react';

interface IDayChangeButtonProps {
    sign:string
}

export default function DayChangeButton (props: IDayChangeButtonProps) {
  return (
    <div>
      <button>{props.sign}</button>
    </div>
  );
}
