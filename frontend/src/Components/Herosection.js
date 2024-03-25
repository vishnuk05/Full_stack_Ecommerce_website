import React from 'react';
import '../Assests/styles/HeroSection.css'
import video from '../Assests/videos/watch_-_107055 (540p).mp4';

const HeroSection = () => {
    return (
        <div className="hero-container">
         <video src={video} autoPlay loop muted />
            <div className="hero-content">
                <h1>Welcome to Infinite Horology</h1>
                <p>Discover amazing experiences with us</p>
                <button className="btn">Get Started</button>
            </div>
        </div>
    );
}

export default HeroSection;
