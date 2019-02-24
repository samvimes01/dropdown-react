import React from 'react'

export function Dropdown(props) {
  const options = props.elements
    .filter(prop => prop.id !== props.selected.id)
    .map(prop => (
      <div
        key={prop.id}
        value={prop.value} 
        className={'selector-item ' + ((prop.classList && prop.classList.map(e => e).join(' ')) || '')}
        onClick={() =>props.handleSelect(prop.id)}
      >
        {prop.text}
      </div>
  ));

  return (
    <div className='dropdown'>
      
      <div
        className={'selector ' + (props.closed ? 'closed' : 'opened')}
        onClick={() => props.handleClick()}
      >
        {props.selected.text}
        <span className={props.closed ? 'open' : 'close'}></span>
      </div>
      
      <div className={'selector-items ' + (props.closed ? 'items-closed' : 'items-opened')}>
        {options}
      </div>

    </div>
  );
}

export default Dropdown;
