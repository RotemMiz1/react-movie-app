import React from "react";
import { Link } from "react-router-dom";

export default function MoviesItem({ item }) {
  return (
    <article className="col-md-4 p-3">
      <div className="p-2 border h-100 shadow-sm text-center">
        <h5>{item.Title}</h5>
        <div>Year: {item.Year}</div>

        {item.Poster && item.Poster !== "N/A" && (
          <img
            src={item.Poster}
            alt={item.Title}
            className="img-fluid mt-2"
            style={{ maxHeight: 250, objectFit: "cover" }}
          />
        )}

        <div className="mt-2">
          <Link
  to={"/movie/" + item.imdbID}
  className="btn btn-primary mt-3 w-100"
>
  More info
</Link>

        </div>
      </div>
    </article>
  );
}
