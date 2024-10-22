import React, { useCallback, useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineBookmarkAdd } from "react-icons/md";

const WatchList = ({onAddToWatchList}) => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce function
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleOnSearch = (e) => setSearch(e.target.value);

  const fetchMovies = useCallback(async (searchTerm) => {
    if (!searchTerm.trim()) {
      setMovies([]);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
        `http://www.omdbapi.com/?s=${searchTerm}&apikey=5b87bc76`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();
      
      if (data.Search && Array.isArray(data.Search)) {
        setMovies(data.Search);
      } else {
        setMovies([]);
        setError(data.Error || "No movies found");
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError(error.message);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Debounced search function for input changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // Effect for input debouncing
  useEffect(() => {
    fetchMovies(debouncedSearch);
  }, [debouncedSearch, fetchMovies]);

  // Debounced search button handler
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedButtonSearch = useCallback(
    debounce(() => {
      fetchMovies(search);
    }, 500),
    [search, fetchMovies]
  );

  const handleAddWatchList = (movie) => onAddToWatchList(movie);

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
        <button 
          onClick={debouncedButtonSearch}
          disabled={loading}
          style={{cursor : "pointer"}}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      <div className="watchlist_card">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <ul className="cartItemData">
            {movies.map((movie) => (
              <li key={movie.imdbID} className="item">
                <figure>
                  <img 
                    src={movie.Poster !== "N/A" ? movie.Poster : '/placeholder.jpg'} 
                    alt={movie.Title} 
                  />

                  <div className="addWatchList" onClick={() => handleAddWatchList(movie)}>
                  <MdOutlineBookmarkAdd />
                  </div>

                </figure>
                <div className="details">
                  <h3>{movie.Title}</h3>
                  <div className="movie-info">
                    <span>{movie.Year}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default WatchList;