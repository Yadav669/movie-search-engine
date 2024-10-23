import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

const SideBar = ({ MyList, onRemove }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [sidebarSearch, setSidebarSearch] = useState("");

  const handleOnChange = (e) => setSidebarSearch(e.target.value);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = () => setShowMenu(false);

  const filteredList = MyList?.filter(movie => 
    movie.Title.toLowerCase().includes(sidebarSearch.toLowerCase())
  );

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

        <div className="myWatchList">
          <h3>My Lists</h3>

          <ul>
          {filteredList?.map((movie) => (
              <li key={movie?.imdbID} className="watchlist-item">
                <span className="movie-title">{movie.Title}</span>
                <button 
                  className="remove-btn"
                  onClick={() => onRemove(movie.imdbID)}
                  aria-label="Remove from watchlist"
                >
                  <MdDelete />
                </button>
              </li>
            ))}
          </ul>
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
            <div className="horizontal-menu" style={{ display: "flex" }}>
              <button className="menu-btn" onClick={handleMenuClick}>
                Login
              </button>
              <button className="menu-btn" onClick={handleMenuClick}>
                Logout
              </button>
            </div>
          ) : (
            <BsThreeDotsVertical onClick={toggleMenu} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
