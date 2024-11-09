import React, { useState, useRef, useEffect } from 'react';
import ReactGA from 'react-ga';
import { gsap } from 'gsap';
import FENAudio from './FEN.mp3'; // Import the audio file directly

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const buttonRef = useRef(null);
  const progressRef = useRef(null);

  // Function to toggle play/pause
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      ReactGA.event({
        category: 'User',
        action: 'Paused Audio',
      });
    } else {
      audioRef.current.play();
      ReactGA.event({
        category: 'User',
        action: 'Played Audio',
      });
    }
    setIsPlaying(!isPlaying);
  };

  // Animation effect for the play/pause button and progress
  useEffect(() => {
    if (isPlaying) {
      gsap.to(buttonRef.current, {
        scale: 1.2,
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        ease: 'power1.inOut',
      });
      gsap.to(progressRef.current, {
        rotation: 360,
        repeat: -1,
        duration: 10,
        ease: 'linear',
      });
    } else {
      gsap.to(buttonRef.current, { scale: 1, clearProps: 'all' });
      gsap.to(progressRef.current, { rotation: 0, clearProps: 'all' });
    }
  }, [isPlaying]);

  return (
    <div className="audio-player">
      <div className={`progress-container ${isPlaying ? 'playing' : ''}`}>
        <div className="progress" ref={progressRef}>
          <div className="progress-inner"></div>
        </div>
      </div>
      
      {/* Hidden audio element */}
      <audio ref={audioRef}>
        <source src={FENAudio} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
      
      {/* Play/Pause button */}
      <button 
        ref={buttonRef} 
        onClick={togglePlay}
        className={isPlaying ? 'playing' : ''}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}

export default AudioPlayer;