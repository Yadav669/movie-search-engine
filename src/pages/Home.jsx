import React, { useEffect, useState } from "react";
import Search from "../component/Search";
import SideBar from "../component/SideBar";
import WatchList from "../component/WatchList";
import "../assets/css/Home.css";

const Home = () => {
  const [myWatchListData, setMyWatchListData] = useState([]);

  const updateWatchList = async (movie) => {
    const existingWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    
    if (!existingWatchlist.some(item => item.imdbID === movie.imdbID)) {
      const updatedWatchlist = [...existingWatchlist, movie];
      localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
      setMyWatchListData(updatedWatchlist);
    }
  };

  const removeFromWatchList = (movieId) => {
    const existingWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    const updatedWatchlist = existingWatchlist.filter(movie => movie.imdbID !== movieId);
    localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
    setMyWatchListData(updatedWatchlist);
  };

  useEffect(() => {
    const savedWatchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    setMyWatchListData(savedWatchlist);
  }, []);

  return (
    <div>
      <Search />
      <div className="side_watchlist">
        <SideBar MyList={myWatchListData} onRemove={removeFromWatchList} />
        <WatchList onAddToWatchList={updateWatchList} />
      </div>
    </div>
  );
};

export default Home;