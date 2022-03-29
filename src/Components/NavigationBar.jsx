import "../Styles/Navbar.scss"
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';

export const TopNavigationBar = () => {
    return (
        <div className="top-nav-container">
            {/* <IconButton aria-label="menu">
                <MenuIcon style={{ color: "white" }} />
            </IconButton> */}
            <h4 style={{ cursor: "pointer" }}>HAPPY</h4>
            <h4 style={{ cursor: "pointer" }}>BIRTHDAY</h4>
            <h4 style={{ cursor: "pointer" }}>KRITIKA</h4>
        </div>
    )
}