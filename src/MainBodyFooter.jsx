import React from 'react';
import './css/MainBodyFooter.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { AddToQueue, AllInclusive, PlayCircle, QueueMusic, SkipNext, VolumeUp } from '@mui/icons-material';

function MainBodyFooter() {
    return (
        <div className='mainBodyFooter'>
            <div className='mainBodyFooter_songInfo'>
                <img src="https://images.unsplash.com/photo-1645498579522-d31e3b674904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60" alt="" />
                <div>
                    <h5>Mere Rakshe</h5>
                    <h6>JalRaj</h6>
                </div>
                <FavoriteBorderIcon />
            </div>
            <div className="mainBodyFooter_player">
                <div className='player'>
                    <ShuffleIcon />
                    <SkipPreviousIcon />
                    <PlayCircle fontSize='large' />
                    <SkipNext />
                    <AllInclusive />
                </div>
                <div>
                    <p>1:20</p>
                    <div className='line'></div>
                    <p>4:50</p>
                </div>
            </div>
            <div className='mainBodyFooter_devices'>
                <QueueMusic />
                <AddToQueue />
                <VolumeUp />
            </div>

        </div>
    )
}

export default MainBodyFooter