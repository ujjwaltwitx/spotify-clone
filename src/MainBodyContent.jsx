import React from 'react';
import './css/MainBodyContent.css';
import EachPlaylistCard from './small comps/EachPlaylistCard';
import PodcastCard from './small comps/PodcastCard';

function MainBodyContent() {
    return (
        <div className='mainBodyContent'>
            <h1>Good Morning</h1>
            <div className='mainBodyContent_playlists'>
                <EachPlaylistCard />
                <EachPlaylistCard />
                <EachPlaylistCard />
                <EachPlaylistCard />
                <EachPlaylistCard />
                <EachPlaylistCard />
            </div>
            <h2>Episodes For You</h2>
            <div className="mainBodyContent_podcastcards">
                <PodcastCard />
                <PodcastCard />
            </div>
            <h2>Jump back in</h2>
            <div className="mainBodyContent_podcastcards">
                <PodcastCard />
                <PodcastCard />
            </div>
            <h2>Spirit of 2022</h2>
            <div className="mainBodyContent_podcastcards">
                <PodcastCard />
                <PodcastCard />
            </div>
        </div>
    );
}

export default MainBodyContent