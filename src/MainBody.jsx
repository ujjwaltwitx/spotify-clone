import React from 'react';
import './css/MainBody.css';
import MainBodyContent from './MainBodyContent';
import MainBodyHeader from './MainBodyHeader';

function MainBody() {
  return (
    <div className="mainbody">
        <MainBodyHeader/>
        <MainBodyContent />
    </div>
  );
}

export default MainBody