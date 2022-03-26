import React, { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import CelebrationIcon from "@mui/icons-material/Celebration";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const url = "";
  const user = null;
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="main-nav">
      <div className="menu-btn">
        <IconButton aria-label="home" onClick={toggleMenu}>
          <MenuIcon sx={{ fontSize: 32, color: "white" }} />
        </IconButton>
      </div>

      <div className="left-nav">
        <NavLink to="/" className="nav-logo">
          <IconButton aria-label="home">
            <CelebrationIcon sx={{ fontSize: 32, color: "white" }} />
          </IconButton>
          <h1>BirthdayWish</h1>
        </NavLink>
      </div>

      <div className={showMenu ? "middle-nav show" : "middle-nav"}>
        <ul className="middle-nav-menu">
          <li className="mobile-nav-link">
            <a href={url}>Notices</a>
          </li>
          <li className="mobile-nav-link">
            <a href={url}>Create</a>
          </li>
          <li className="mobile-nav-link">
            <a href={url}>Profile</a>
          </li>
          <li className="mobile-nav-link">
            <a href={url}>BirthdayWishes</a>
          </li>
          <li className="mobile-nav-link">
            <a href={url}>Communities</a>
          </li>
          <li className="mobile-nav-link">
            {user ? <a>Sign Out</a> : <NavLink to="auth">Sign In</NavLink>}
          </li>
        </ul>
      </div>

      {user ? (
        <ul className="right-nav">
          <li>
            <IconButton aria-label="notices">
              <NotificationsIcon
                sx={{
                  fontSize: 24,
                  color: "white",
                }}
              />
            </IconButton>
          </li>
          <li>
            <IconButton aria-label="add">
              <AddReactionIcon
                sx={{
                  fontSize: 24,
                  color: "white",
                }}
              />
            </IconButton>
          </li>

          <li className="drop-down">
            {user.result.imageUrl ? (
              <img src={user?.result.imageUrl} alt={user?.result.name} />
            ) : (
              <IconButton aria-label="profile">
                <AccountCircleIcon
                  sx={{
                    fontSize: 24,
                    color: "white",
                  }}
                />
              </IconButton>
            )}

            <div className="sub-menu-box">
              <ul className="sub-menu">
                <li>
                  <a href={url}>Profile</a>
                </li>
                <li>
                  <a href={url}>BirthdayWishes</a>
                </li>
                <li>
                  <a href={url}>Communities</a>
                </li>
              </ul>
              <div className="submenu-border"></div>
              <div className="sub-menu">
                <div className="single-link">
                  <a>Sign out</a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      ) : (
        <div className="right-nav">
          <NavLink to="auth">
            <h3>Sign In</h3>
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
