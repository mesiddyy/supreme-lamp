import "../Styles/Navbar.scss"
import React, { useState, useEffect } from "react";

export const TopNavigationBar = () => {
    return (
        <div className="top-nav-container" style={{ backgroundImage: 'url(' + require('./images/nikhil1.jpg') + ')' }}>
            <h4 style={{ cursor: "pointer" }}>HAPPY</h4>
            <h4 style={{ cursor: "pointer" }}>BIRTHDAY</h4>
            <h4 style={{ cursor: "pointer" }}>KRITIKA</h4>
            <p style={{ position: "absolute", bottom: 2 }}>Swipe Up</p>
        </div>
    )
}

export const BottomNavigationBar = () => {
    return (
        <div className="top-nav-container" style={{ backgroundImage: 'url(' + require('./images/nikhil17.jpg') + ')' }}>

            <h5 style={{ cursor: "pointer", fontSize: 34 }}>A wish for you on your birthday, whatever you ask may you receive, whatever you seek may you find, whatever you wish may it be fulfilled on your birthday and always. Happy birthday!</h5>
            <p style={{ position: "absolute", bottom: 2 }}>Swipe Up</p>
        </div>
    )
}
const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },
        [playing]
    );

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return [playing, toggle];
};

export const Player = ({ url }) => {
    const [playing, toggle] = useAudio(url);
    return (
        <div style={{ display: "flex", width: "100%", height: 100, justifyContent: "center", alignItems: "center" }}>
            <button style={{ height: 40, width: 100, borderRadius: 10, zIndex: 100000, border: 0, backgroundColor: "#76d4ff" }} onClick={toggle}>{playing ? "Pause" : "Play"}</button>
        </div>
    );
};