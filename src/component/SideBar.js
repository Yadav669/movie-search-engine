import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SideBar = () => {
  const [sidebarSearch, sstSidebarSearch] = useState("");

  const handleOnChange = (e) => sstSidebarSearch(e.target.value);

  return (
    <div className="sidebar">
      <div>
        <h2 className="watchlists">watchlists</h2>

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
      </div>

      <div>guest</div>
    </div>
  );
};

export default SideBar;
