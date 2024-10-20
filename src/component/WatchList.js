import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import DummyImage from "../assets/image/images.jpeg"
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { FaSmile } from "react-icons/fa";

const WatchList = () => {
  const [search, setSearch] = useState("");

  const handleOnSearch = (e) => setSearch(e.target.value);

  return (
    <div className="watchList">
      <div className="welcome_to_watchlist">
        <h3>
          Welcome to <span>watchlists</span>
        </h3>

        <p className="watchListText">
          <span>
            Browse movies, add them to watchList and share them with friends.
          </span>
          <span>
            Just click the <MdOutlineBookmarkAdd /> to add a movie, the poster
            to see more details crossed the movie as watched.{" "}
          </span>
        </p>
      </div>

      <div className="movie_search">
        <div>
          <CiSearch />
          <input
            name="search"
            id="search"
            value={search}
            onChange={handleOnSearch}
            placeholder="Search your movie"
          />
        </div>
        <button>search</button>
      </div>

      <div className="watchlist_card">
        <div className="card">
          <img src={DummyImage} />

          <h4><FaSmile /></h4>

          <div>
            <p>top gun: </p>
            <p>maverick</p>
            <p>{"(2022)"}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WatchList;
