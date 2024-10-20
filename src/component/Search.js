import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../assets/css/search.css";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleOnChange = (e) => setSearch(e.target.value);

  return (
    <div className="search">
      <div className="search_container">
        <input
          name="search"
          id="search"
          value={search}
          onChange={handleOnChange}
          placeholder="search your movie"
        />
        <FaSearch />
      </div>
    </div>
  );
};

export default Search;
