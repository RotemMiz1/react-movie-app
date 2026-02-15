import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MoviesItem from "../components/MoviesItem";
import SearchMovie from "../components/SearchMovie";

const API_KEY = "5a292f28";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();

  const q = (searchParams.get("s") || "").trim();

  useEffect(() => {
    if (q) {
      fetchBySearch(q);
    } else {
      fetchHomeList(); 
    }
  }, [q]);

  const fetchBySearch = async (query) => {
    const url = `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${API_KEY}`;
    try {
      setLoading(true);
      const { data } = await axios.get(url);

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (err) {
      console.log(err);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  const fetchHomeList = async () => {
    const queries = ["man", "love", "war"];

    try {
      setLoading(true);

      const requests = queries.map((q) =>
        axios.get(`https://www.omdbapi.com/?s=${encodeURIComponent(q)}&apikey=${API_KEY}`)
      );

      const responses = await Promise.all(requests);

      const map = new Map();
      for (const res of responses) {
        const data = res.data;
        if (data.Response === "True" && Array.isArray(data.Search)) {
          data.Search.forEach((m) => map.set(m.imdbID, m));
        }
      }

      setMovies(Array.from(map.values()).slice(0, 24)); // אפשר לשנות כמות
    } catch (err) {
      console.log(err);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="strip">
        <h1>Movies</h1>
      </div>

      <div className="container">
        <div className="d-flex justify-content-between align-items-center my-3 flex-wrap gap-2">
          <h2 className="m-0">{q ? `Results for: ${q}` : "Popular movies"}</h2>
        </div>

        <SearchMovie />

        {loading ? (
          <h3>Loading...</h3>
        ) : movies.length === 0 ? (
          <h4>No results found</h4>
        ) : (
          <div className="row">
            {movies.map((item) => (
              <MoviesItem key={item.imdbID} item={item} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
