import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import IconButton from "@mui/material/IconButton";
import CelebrationIcon from "@mui/icons-material/Celebration";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/auth");
    setUser(null);
    setShowMenu(false);
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
        {user?.result ? (
          <div className="profile-icon">
            {user.result.imageUrl ? (
              <img src={user?.result.imageUrl} alt={user?.result.name} />
            ) : (
              <h2>{user?.result.name}</h2>
            )}
          </div>
        ) : (
          <></>
        )}

        <ul className="middle-nav-menu">
          <li>
            <button className="mobile-nav-link" type="button">
              Notices
            </button>
          </li>
          <li>
            <button className="mobile-nav-link" type="button">
              Create
            </button>
          </li>
          <li>
            <button className="mobile-nav-link" type="button">
              Profile
            </button>
          </li>
          <li>
            <button className="mobile-nav-link" type="button">
              BirthdayWishes
            </button>
          </li>
          <li>
            <button className="mobile-nav-link" type="button">
              Communities
            </button>
          </li>
          <li>
            {user?.result ? (
              <button
                type="button"
                className="mobile-nav-link"
                onClick={logout}
              >
                Sign Out
              </button>
            ) : (
              <NavLink to="auth">Sign In</NavLink>
            )}
          </li>
        </ul>
      </div>

      {user?.result ? (
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
              <div className="profile-icon">
                <img src={user?.result.imageUrl} alt={user?.result.name} />
              </div>
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
                  <button className="nav-link" type="button">
                    Profile
                  </button>
                </li>
                <li>
                  <button className="nav-link" type="button">
                    BirthdayWishes
                  </button>
                </li>
                <li>
                  <button className="nav-link" type="button">
                    Communities
                  </button>
                </li>
              </ul>
              <div className="submenu-border"></div>
              <div className="sub-menu" onClick={logout}>
                <div className="single-link">
                  <button type="button" className="nav-link">
                    Sign Out
                  </button>
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
