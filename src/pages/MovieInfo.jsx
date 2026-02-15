import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function MovieInfo() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const { id } = useParams(); // imdbID מה-URL

  useEffect(() => {
    doApi();
    // eslint-disable-next-line
  }, []);

  const doApi = async () => {
    const url = `https://www.omdbapi.com/?i=${id}&plot=full&apikey=5a292f28`;
    try {
      setLoading(true);
      const { data } = await axios.get(url);

      if (data.Response === "True") {
        setMovie(data);
      } else {
        setMovie(null);
      }
    } catch (err) {
      console.log(err);
      setMovie(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4">
      {loading ? (
        <h3>Loading...</h3>
      ) : movie ? (
        <div className="row">
          <div className="col-md-5">
            {movie.Poster && movie.Poster !== "N/A" && (
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="img-fluid rounded shadow"
              />
            )}
          </div>

          <div className="col-md-7">
            <h2>{movie.Title}</h2>
            <p><b>Year:</b> {movie.Year}</p>
            <p><b>Runtime:</b> {movie.Runtime}</p>
            <p><b>IMDb Rating:</b> {movie.imdbRating}</p>
            <p><b>Actors:</b> {movie.Actors}</p>
            <p><b>Plot:</b> {movie.Plot}</p>

            <button className="btn btn-dark mt-3" onClick={() => nav(-1)}>
              Back
            </button>
          </div>
        </div>
      ) : (
        <h3>Movie not found</h3>
      )}
    </div>
  );
}
