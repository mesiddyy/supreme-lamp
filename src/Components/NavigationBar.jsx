import "../Styles/Navbar.scss"
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';

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

            <h4 style={{ cursor: "pointer" }}>HERE</h4>
            <h4 style={{ cursor: "pointer" }}>IS</h4>
            <h4 style={{ cursor: "pointer" }}>A</h4>
            <h4 style={{ cursor: "pointer" }}>LITTLE</h4>
            <h4 style={{ cursor: "pointer" }}>COLLECTION</h4>
            <p style={{ position: "absolute", bottom: 2 }}>Swipe Up</p>
        </div>
    )
}