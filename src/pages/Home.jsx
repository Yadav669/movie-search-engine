import React from "react";
import Search from "../component/Search";
import SideBar from "../component/SideBar";
import WatchList from "../component/WatchList";
import "../assets/css/Home.css";

const Home = () => {
  return (
    <div>
      <Search />
      <div className="side_watchlist">
        <SideBar />
        <WatchList />
      </div>
    </div>
  );
};

export default Home;
