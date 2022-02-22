import React from 'react';
import "./css/MusicBox.css";

function MusicBox() {
  return (
    <div className='musicBox'>
        <img src="https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60" alt="avatar" />
        <div className='musicBox_info'>
            <p>Bad Habits by Ed Sheran</p>
            <div className='musicBox_progressBar'></div>
        </div>
    </div>
  )
}

export default MusicBox