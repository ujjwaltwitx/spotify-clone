import React from 'react'
import './css/IconTextButton.css';

function IconTextButton({title, Icon}) {
  return (
    <div className='iconTextButton'>
        <Icon/>
        <span className='iconbutton_title'>{title}</span>
    </div>
  );
}

export default IconTextButton;