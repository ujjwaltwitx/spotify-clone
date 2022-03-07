import React from 'react';
import SideBar from './SideBar';
import MainBody from './MainBody';
import './css/App.css';
import MainBodyFooter from './MainBodyFooter';
import './css/MainBodyFooter.css'
function App() {
  return (
    <div className='app'>
      <div className='app_content'>
        <SideBar/>
        <MainBody />
      </div>
      <MainBodyFooter />
    </div>
  );
}

export default App;
