import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BiDotsHorizontalRounded } from "react-icons/bi";

const SideBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [sidebarSearch, setSidebarSearch] = useState("");

  const handleOnChange = (e) => setSidebarSearch(e.target.value);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = () => {
    // Hide the menu and bring back the three-dot icon when clicking login or logout
    setShowMenu(false);
  };

  return (
    <div className="sidebar">
      <div>
        <h2 className="watchlists">Watchlists</h2>

        <div className="input-serach-group">
          <div>
            <FaSearch />
            <input
              name="sidebar_search"
              id="sidebar_search"
              value={sidebarSearch}
              onChange={handleOnChange}
              placeholder="Search"
            />
          </div>
        </div>

        <div className="sideBar-home-Btn">
          <div>
            <button className="HomeBtn">
              <span>
                <IoHomeOutline />
              </span>
              Home
            </button>
          </div>
        </div>
      </div>

      <div className="guest">
        <div className="pro">
          <span>
            <CgProfile />
          </span>
        </div>
        <div className="dot">
          {showMenu ? (
            <div className="horizontal-menu" style={{ display: 'flex' }}>
              <button className="menu-btn" onClick={handleMenuClick}>
                Login
              </button>
              <button className="menu-btn" onClick={handleMenuClick}>
                Logout
              </button>
            </div>
          ) : (
            <BiDotsHorizontalRounded onClick={toggleMenu} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
