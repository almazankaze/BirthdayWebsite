import React, { Fragment, useState } from "react";
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../api/user";
import { signOutUser } from "../../utilities/firebase";
import IconButton from "@mui/material/IconButton";
import CelebrationIcon from "@mui/icons-material/Celebration";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.css";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const signMeOut = async () => {
    setShowMenu(false);
    await signOutUser();
    navigate("/auth");
  };

  return (
    <Fragment>
      <nav className="main-nav">
        <div className="menu-btn">
          {currentUser ? (
            <IconButton aria-label="home" onClick={toggleMenu}>
              <MenuIcon sx={{ fontSize: 32, color: "white" }} />
            </IconButton>
          ) : (
            <NavLink
              className="mobile-nav-link"
              to="/auth"
              onClick={() => setShowMenu(false)}
            >
              Sign In
            </NavLink>
          )}
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
          {currentUser ? (
            <div className="profile-icon">
              {currentUser.photoUrl ? (
                <img src={currentUser.photoUrl} alt={currentUser.displayName} />
              ) : (
                <h2>{currentUser.displayName}</h2>
              )}
            </div>
          ) : (
            <></>
          )}

          <ul className="middle-nav-menu">
            <li>
              <button className="mobile-nav-link" type="button">
                Profile
              </button>
            </li>
            <li>
              <NavLink
                className="mobile-nav-link"
                to="/create"
                onClick={() => setShowMenu(false)}
              >
                Create
              </NavLink>
            </li>
            <li>
              <NavLink
                className="mobile-nav-link"
                to="/myWishes"
                onClick={() => setShowMenu(false)}
              >
                Birthday Wishes
              </NavLink>
            </li>
            <li>
              <button className="mobile-nav-link" type="button">
                Notices
              </button>
            </li>
            <li>
              <button className="mobile-nav-link" type="button">
                Communities
              </button>
            </li>
            <li>
              {currentUser ? (
                <button
                  type="button"
                  className="mobile-nav-link"
                  onClick={signMeOut}
                >
                  Sign Out
                </button>
              ) : (
                <NavLink
                  className="mobile-nav-link"
                  to="/auth"
                  onClick={() => setShowMenu(false)}
                >
                  Sign In
                </NavLink>
              )}
            </li>
          </ul>
        </div>

        {currentUser ? (
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
              <NavLink to="/create">
                <IconButton aria-label="add">
                  <AddReactionIcon
                    sx={{
                      fontSize: 24,
                      color: "white",
                    }}
                  />
                </IconButton>
              </NavLink>
            </li>

            <li className="drop-down">
              {currentUser.photoUrl ? (
                <div className="profile-icon">
                  <img
                    src={currentUser.photoUrl}
                    alt={currentUser.displayName}
                  />
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
                      {currentUser.displayName}
                    </button>
                  </li>
                  <li>
                    <NavLink
                      className="nav-link"
                      to="/myWishes"
                      onClick={() => setShowMenu(false)}
                    >
                      Birthday Wishes
                    </NavLink>
                  </li>
                  <li>
                    <button className="nav-link" type="button">
                      Communities
                    </button>
                  </li>
                </ul>
                <div className="submenu-border"></div>
                <div className="sub-menu">
                  <div className="single-link">
                    <button
                      type="button"
                      className="nav-link"
                      onClick={signMeOut}
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        ) : (
          <div className="right-nav">
            <NavLink to="/auth" onClick={() => setShowMenu(false)}>
              <h3>Sign In</h3>
            </NavLink>
          </div>
        )}
      </nav>

      <Outlet />
    </Fragment>
  );
};

export default NavBar;
