import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PersonIcon from '@mui/icons-material/Person';
import NavButtons from './small comps/NavButtons';
import './css/MainBodyHeader.css'

function MainBodyHeader() {
  return (
    <div className='mainBodyHeader'>
        <div className='header_buttons'>
            <NavButtons Icon={ArrowBackIosNewIcon}/>
            <NavButtons Icon={ArrowForwardIosIcon}/>
        </div>
        <div className="header_account">
            <div style={{letterSpacing:2, fontWeight:700,}}>UPGRADE</div>
            <div style={{columnGap:10}}><PersonIcon /><span>ujjwaltwitx</span></div>
        </div>
    </div>
  )
}

export default MainBodyHeader;