import "../Styles/Navbar.scss"
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';

export const TopNavigationBar = () => {
    return (
        <div className="top-nav-container">
            <h4 style={{ cursor: "pointer" }}>HAPPY</h4>
            <h4 style={{ cursor: "pointer" }}>BIRTHDAY</h4>
            <h4 style={{ cursor: "pointer" }}>KRITIKA</h4>
        </div>
    )
}

export const BottomNavigationBar = () => {
    return (
        <div className="top-nav-container">
            <h4 style={{ cursor: "pointer" }}>HERE</h4>
            <h4 style={{ cursor: "pointer" }}>IS</h4>
            <h4 style={{ cursor: "pointer" }}>A</h4>
            <h4 style={{ cursor: "pointer" }}>LITTLE</h4>
            <h4 style={{ cursor: "pointer" }}>COLLECTION</h4>
        </div>
    )
}