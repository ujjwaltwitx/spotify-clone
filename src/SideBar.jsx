import React from 'react';
import './css/SideBar.css'
import IconTextButton from './IconTextButton';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleIcon from '@mui/icons-material/AddCircle';


function SideBar(){
    return <div className='sideBar'>
        <div className='sideBar_heading'>
            <img src="https://img.icons8.com/color/48/000000/spotify--v1.png" alt='spotify'/>
            <p>Spotify</p>
        </div>
        <div className='sideBar_icons'>
            <IconTextButton title='Home' Icon = {HomeIcon} />
            <IconTextButton title='Search' Icon = {SearchIcon} />
            <IconTextButton title='Library' Icon = {VideoLibraryIcon} />
        </div>
        <div className='sideBar_icons'>
        <IconTextButton title='Liked Songs' Icon = {FavoriteIcon} />
        <IconTextButton title='Create Playlist' Icon = {AddCircleIcon} />
        <hr />
            <div className='sideBar_textButton'>
                <p>Coding Music</p>
                <p>#Boost</p>
                <p>Coding LoFi Music</p>
                <p>Chill Music</p>
            </div>
        </div>
    </div>
}

export default SideBar;