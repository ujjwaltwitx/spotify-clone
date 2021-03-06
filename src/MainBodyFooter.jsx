import React from 'react';
import './css/MainBodyFooter.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { AddToQueue, AllInclusive, PlayCircle, QueueMusic, SkipNext, VolumeUp } from '@mui/icons-material';
import { Slider } from '@mui/material';

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
                    <div style={{ width: 500 }}><Slider size='small' sx={{
                        color: 'rgba(0,0,0,0.87)',
                        height: 4,
                        '& .MuiSlider-thumb': {
                            width: 15,
                            height: 15,
                            color: 'green',
                            transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                            '&:before': {
                                boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                            },
                            '&:hover, &.Mui-focusVisible': {
                                boxShadow: '0px 0px 0px 8px rgb(0 0 0 / 16%)',
                            },
                            '&.Mui-active': {
                                width: 20,
                                height: 20,
                            },
                        },
                        '& .MuiSlider-rail': {
                            opacity: 0.28,
                        },
                    }} />
                    </div>
                    <p>4:50</p>
                </div>
            </div>
            <div className='mainBodyFooter_devices'>
                <QueueMusic />
                <AddToQueue />
                <VolumeUp />
                <Slider size='small' />
            </div>

        </div>
    )
}

export default MainBodyFooter