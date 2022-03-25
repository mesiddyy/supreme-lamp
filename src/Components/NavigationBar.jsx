import "../Styles/Navbar.scss"
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';

export const TopNavigationBar = () => {
    return (
        <div className="top-nav-container">
            <IconButton aria-label="menu">
                <MenuIcon style={{ color: "white" }} />
            </IconButton>
            <h4 style={{ cursor: "pointer" }} onClick={() => window.location.pathname = "/"}>Supreme-Lamp</h4>
            <IconButton aria-label="menu">
                <AccountCircleIcon style={{ color: "white" }} />
            </IconButton>
        </div>
    )
}